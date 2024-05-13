import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../_context/CartContext';
import CartApis from '../../_utils/CartApis';
import OrderApis from '../../_utils/OrderApis';
import { useRouter } from 'next/navigation';

const CheckoutForm = ({ amount }) => {
    const router = useRouter();
    const { cart, setCart } = useContext(CartContext);
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [error, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');


    if(amount == 0)
        router.push('/products');

 

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setLoading(true);

        // First, attempt to submit the elements form
        const { error: submissionError } = await elements.submit();
        if (submissionError) {
            // Handle error on submission
            setErrorMessage(submissionError.message);
            setLoading(false);
            return;
        }

        // After successful submission, proceed with payment intent creation and confirmation
        const res = await fetch('api/create-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount })
        });

        const clientSecret = await res.json()

        const result = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: "https://rodiraydan.vercel.app/payment-confirm",
                receipt_email: email,  // Correct place to include the email for receipt purposes
                shipping: {
                    name: 'New Customer',  // Consider dynamically assigning this
                    phone: phone,
                    address: {
                        line1: address
                    }
                }
            },
            redirect: 'if_required'

        });


        setLoading(false);

        if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            setErrorMessage(result.error.message);
            console.log(result.error.message);
        } else {
            // Your customer will be redirected to your `return_url`.
            await createOrder();
        }
    };


    const createOrder = async () => {
        let productIds = cart.map(el => el?.product?.id);
        const data = {
            data: {
                amount,
                products: productIds
            }
        };
        OrderApis.createOrder(data).then(res => {
            if (res) {
                cart.forEach(el => {
                    CartApis.deleteCartItem(el?.id).then(result => {
                        setCart([]);
                    });
                });
            }
        });







        const tableRows = cart.map(product => {
            // Extract the specific attributes from the product
            const { title, price, category, description, banner } = product.product.attributes;


            // Extract the small format URL from the banner
            const imageUrl = banner.data.attributes.formats.small.url;

            return `
              <tr>
                <td>${title}</td>
                <td>${price}</td>
                <td>${category}</td> 
                <td><img src="${imageUrl}" alt="Product Image" style="width:100px;"></td>
              </tr>
            `;
        }).join('');


        const customerInfoHTML = `
          <h2>Customer Information</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Address:</strong> ${address}</p>
        `;



        try {
            // Example: Call an API to verify a coupon code
            const couponResponse = await fetch('api/sendOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({
                    data123: "abc",
                    htmlContent: `
                  <html>
                  <head>
                    <title>Product Table</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
                  </head>
                  <body>
                    <h1>Product List</h1>
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Price</th>
                          <th>Category</th> 
                          <th>Image</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${tableRows}
                      </tbody>
                    </table>
                    ${customerInfoHTML}
                  </body>
                </html>
                `

                })
            });

        } catch (error) {
            console.error("Payment error:", error);
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
            router.push('/payment-confirm');
        }








    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="tw-mx-12 md:mx-[320px] tw-mt-14 tw-mb-12">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required className="tw-w-full tw-p-2 tw-mt-4 tw-rounded-md" />
                <input type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone" required className="tw-w-full tw-p-2 tw-mt-4 tw-rounded-md" />
                <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="Address" required className="tw-w-full tw-p-2 tw-mt-4 tw-rounded-md" />
                <PaymentElement />
                <button className='tw-w-full tw-p-2 tw-mt-4 tw-text-white tw-rounded-md tw-bg-cyan-700' disabled={!stripe || loading}>Submit</button>
                {error && <p className="tw-text-red-500">{error}</p>}
            </div>
        </form>
    );
};

export default CheckoutForm;
