import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function PaymentConfirm() {
	return (
		<div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-5 tw-mt-4'>
			<Image src='/images/verified1.gif'
				alt='check'
				width={230}
				height={130}
			/>
			<h2 className='tw-text-[24px]'>The payment was successful!</h2>
			<h2 className='tw-text-[17px] tw-text-center tw-mt-6 tw-text-gray-500'>We have received your order. Please contact us if you have any questions or concerns.</h2>
			<Link
				href="/"
				className='tw-p-2 tw-mt-6 tw-text-white tw-rounded-md  tw-bg-cyan-700 hover:tw-text-white tw-mb-8'>
				Go to Home</Link>

		</div>
	)
}

export default PaymentConfirm