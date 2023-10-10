import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component.jsx';

import { PaymentFormContainer, FormContainer } from './payment-form.styles.jsx';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async(e) => {
        e.preventDefault();

        if (!stripe || ! elements) { return };

        // First we make the payment intent

        // Netlify will build out the functions placed within `netlify/functions/` in routes relative to the url of the application.
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: 10000})
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
                    name: 'Methi Kertson'
                },
            },
        });

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
                <Button button_type={ BUTTON_TYPE_CLASSES.google }>Pay Now</Button>
            </FormContainer>
        </PaymentFormContainer>
    )
};

export default PaymentForm;
