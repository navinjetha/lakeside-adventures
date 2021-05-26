import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

function PaymentForm() {

    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if(!error) {
            try {
                const {id} = paymentMethod;
                const response = await axios.post("http://localhost:3000/payment", {
                    amount: 10000,
                    id
                })

                if(response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true)
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <>
            {!success ? 
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <CardElement />
                        </div>
                    </fieldset>
                    <button>Pay</button>
                </form>
                :
                <div>
                    <h2>You just successfully paid for watersport adventure. Thank you!</h2>
                </div>
            }

        </>
    )
}

export default PaymentForm;