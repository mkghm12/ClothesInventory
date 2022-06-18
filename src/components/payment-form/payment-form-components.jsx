import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { BUTTON_TYPE_CLASSES } from "../button/button.component"
import { FormContainer, PaymentButton, PaymentFormContainer } from "./payment-form.styles"
import { useSelector } from "react-redux"
import { selectTotalCartPrice } from "../../store/cart/cart.selector"
import { userSelector } from "../../store/user/user.selector"
import { useState } from "react"

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectTotalCartPrice);
    const currentUser = useSelector(userSelector);
    const [isPaymentInProgress, setIsPaymentInProgress] = useState(false);


    const paymentFormHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        setIsPaymentInProgress(true);

        const response = await fetch('/.netlify/functions/create-stripe-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: amount * 100 })
        }).then(res => res.json());

        const { stripePaymentIntent: { client_secret } } = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest'
                }
            }
        });

        setIsPaymentInProgress(false);

        if (paymentResult.error) {
            alert(paymentResult.error);
        } else if (paymentResult.paymentIntent.status === 'succeeded') {
            alert('payment successful');
        }
    }

    return (
        <PaymentFormContainer>
            <h2>Card Payment:</h2>
            <FormContainer onSubmit={paymentFormHandler}>
                <CardElement />
                <PaymentButton
                    isLoading={isPaymentInProgress}
                    buttonType={BUTTON_TYPE_CLASSES.inverted}
                >
                    Pay Now
                </PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm