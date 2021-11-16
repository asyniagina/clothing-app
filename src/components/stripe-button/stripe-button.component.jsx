import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JwCioEPjMzW0HsVF0cFKbGtifXk92ytTIWWWbOIXsk0BgkpwUNAgDMkQJFm6KNPrmc7mUEniKa8rZg5yi4ynIZn00U6aPsAE8';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing LTD'
            billingAddress
            shippingAddress
            image='https://stripe.com/img/documentation/checkout/marketplace.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;