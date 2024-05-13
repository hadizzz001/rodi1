'use client'
import React, { useContext } from 'react'
import { CartContext } from '../_context/CartContext'
import CartApis from '../_utils/CartApis'
import { useRouter } from 'next/navigation'

function Cart() {
	const router = useRouter();
	const { cart, setCart } = useContext(CartContext)
	const getTotalAmount = () => {
		let totalAmount = 0;
		cart.forEach(item => {
			totalAmount = totalAmount + Number(item?.product?.attributes?.price)
		})
		return totalAmount
	}
	const deleteCartItemFromList = (id) => {
		CartApis.deleteCartItem(id).then((res) => {
			if (res) setCart((oldCart) => oldCart.filter(item => item.id !== res?.data?.data?.id))
		}).catch(error => {
			console.log('error', error)
		})
	}

	return (

		<section>
			<div className="tw-max-w-screen-xl tw-px-4 tw-py-8 tw-mx-auto sm:tw-px-6 sm:tw-py-12 lg:tw-px-8">
				<div className="tw-max-w-3xl tw-mx-auto">
					<header className="tw-text-center">
						<h1 className="tw-text-xl tw-font-bold tw-text-white  tw-bg-cyan-500 tw-rounded-lg tw-p-5 sm:tw-text-3xl">Your Cart</h1>
					</header>

					<div className="tw-mt-8">
						<ul className="tw-space-y-4">
							{cart?.map((item) => (
								<li className="tw-flex tw-items-center tw-gap-4">
									<img
										src={item?.product?.attributes?.banner?.data?.attributes?.url}
										alt=""
										className="tw-object-cover tw-w-16 tw-h-15 tw-rounded"
									/>

									<div>
										<h3 className="tw-text-sm tw-text-gray-900">{item?.product?.attributes?.title}</h3>

										<dl className="tw-mt-0.5 tw-space-y-px tw-text-[10px] tw-text-gray-600">
											<div>
												<dt className="tw-inline">Category:</dt>
												<dd className="tw-inline">{item?.product?.attributes?.category}</dd>
											</div>

										</dl>
									</div>

									<div className="tw-flex tw-items-center tw-justify-end tw-flex-1 tw-gap-2">
									${item?.product?.attributes?.price}

										<button onClick={() => deleteCartItemFromList(item?.id)} className="tw-text-gray-600 tw-transition hover:tw-text-red-600">
											<span className="tw-sr-only">Remove item</span>

											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												className="tw-w-4 tw-h-4"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
												/>
											</svg>
										</button>
									</div>
								</li>
							))}



						</ul>

						<div className="tw-flex tw-justify-end tw-pt-8 tw-mt-8 tw-border-t tw-border-gray-100">
							<div className="tw-w-screen tw-max-w-lg tw-space-y-4">
								<dl className="tw-space-y-0.5 tw-text-sm tw-text-gray-700">


									<div className="tw-flex tw-justify-between tw-!text-base tw-font-medium">
										<dt>Total</dt>
										<dd>${getTotalAmount()}</dd>
									</div>
								</dl>



								<div className="tw-flex tw-justify-end">
									<button
										onClick={() => router.push(`/checkout?amount=${getTotalAmount()}`)}
										className="tw-block tw-px-5 tw-py-3 tw-text-sm tw-text-gray-100 tw-transition tw-bg-gray-700 tw-rounded hover:tw-bg-gray-600"
									>
										Checkout
									</button>
								</div>
							</div>
						</div>
						{/* <h2 className='tw-text-gray-400 tw-text-[12px]'>Note: All Items will be sent via Email</h2> */}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Cart