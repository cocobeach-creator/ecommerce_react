import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 	"pk_test_9EMH5VXpU2gbKJalAoAz7l3K00aToCsi66"

    const onToken =token => {
        console.log(token);
        alert("Payment Successful")
    }

    return(
        <StripeCheckout
        label="Pay Now"
        name="Lullaby Pie"
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;