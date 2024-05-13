
import { CartContext } from '../../../_context/CartContext'
import CartApis from '../../../_utils/CartApis'
import { ShoppingCart } from 'lucide-react'
import {useContext} from 'react'

function ProductInfo({product}) {
  const { cart, setCart } = useContext(CartContext)
  const handleAddToCart = () => {
    const data = {
      data: {
        products: [product?.id]
      }
    };
    
  
    console.log("Payload:", data); // Log the payload object
  
    CartApis.addToCart(data)
      .then(res => {
        console.log('cart created successfully', res.data.data)
				setCart(oldCart => [
					...oldCart,
					{
						id: res?.data?.data?.id,
						product
					}
				])
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  return (
    <div className='tw-mx-auto tw-my-auto'>
        <h2 className='tw-text-[20px]'>{product?.attributes?.title}</h2>
        <h2 className='tw-text-[15px] tw-text-gray-400'>{product?.attributes?.category}</h2>
        <h2 className='tw-text-[15px] tw-mt-5' >{product?.attributes?.description[0]?.children[0].text}</h2>
        <h2 className='tw-text-[32px] tw-text-cyan-600 tw-mt-3'>$ {product?.attributes?.price}</h2>
        <button onClick={() => handleAddToCart()} className='tw-flex tw-gap-2 tw-bg-cyan-600 hover:tw-bg-gray-600 tw-p-3 tw-rounded-lg tw-text-white'><ShoppingCart />Add To Cart</button>
    </div>
  )
}

export default ProductInfo