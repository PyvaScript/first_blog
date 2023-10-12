// We need to track when we are in a loading state during payment
import { useState } from 'react';

// We need to pull two values from useSelector - the current user and the order amount
import { useSelector } from 'react-redux';

import { selectTotalOrderCost } from '../../redux-store/cart/cart.selector.js';

import { selectCurrentUser } from '../../redux-store/user/user.selector.js';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// We no longer need to import `Button` as below but still need `BUTTON_TYPE_CLASSES` because our newly created `PaymentButton` is just one layer
// on-top of our Button component and therefore still needs arguments such as `BUTTON_TYPE_CLASSES` to render correctly.
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component.jsx';

import { PaymentFormContainer, FormContainer, PaymentButton } from './payment-form.styles.jsx';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectTotalOrderCost);
    const currentUser = useSelector(selectCurrentUser);
    const [ isPaymentProcessing, setIsPaymentProcessing ] = useState(false);

    const paymentHandler = async(e) => {
        e.preventDefault();

        if (!stripe || ! elements) { return };

        // First we make the payment intent

        setIsPaymentProcessing(true);

        // Netlify will build out the functions placed within `netlify/functions/` in routes relative to the url of the application.
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: amount * 100})
        }).then(res=>res.json());

        // const clientSecret = response.paymentIntent.client_secret;

        const { paymentIntent: { client_secret }} = response;

        console.log(response);

        console.error(client_secret);

        // Now we perform the actual payment

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest',
                },
            },
        });

        // setIsPaymentProcessing can be placed here as this code is asynchronous
        setIsPaymentProcessing(false);

        if (paymentResult.error) {
            alert("paymentResult.error");
            console.error(paymentResult.error);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert("Payment Successful");
            } else {
                alert("No error in payment but no success message either");
            };
        };
    };

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={ paymentHandler }>
                <h2>Pay With Credit Card:</h2>
                <CardElement />
                <PaymentButton isLoading = { isPaymentProcessing } button_type = { BUTTON_TYPE_CLASSES.google }>Pay Now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
};

export default PaymentForm;
