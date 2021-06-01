import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const PUBLIC_KEY = "pk_test_51GxExtI3Lsj8gCRgV5MKtnvl6tSUYqqLjCWQHSrE26DC72jO3KA6ubhrlC750eMg3AzDcKoaBZzNxnzRy1ZiWGEQ00ujwlRJ4K";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

function StripeContainer(props) {
    const {payment, onComplete} = props
    return (
        <Elements stripe={stripeTestPromise}>
            <CheckoutForm payment={payment} onComplete={onComplete}/>
        </Elements>
    )
}

export default StripeContainer;
