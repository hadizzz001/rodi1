'use client'
import React, { Suspense } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './_components/CheckoutForm';
import { useSearchParams } from 'next/navigation';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);

function Checkout() {
  // Wrap the client-side code with Suspense and provide a fallback
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientSideCheckout />
    </Suspense>
  );
}

// Move the client-side code to a separate component
function ClientSideCheckout() {
  const searchParams = useSearchParams();
  const options = {
    mode: 'payment',
    currency: 'usd',
    amount: searchParams.get('amount') * 100,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={Number(searchParams.get('amount'))} />
    </Elements>
  );
}

export default Checkout;