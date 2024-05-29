import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Button, Container, Typography, Box } from '@mui/material';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
    } else {
      console.log('Payment Method Created:', paymentMethod);
      // Handle further server-side payment processing here
    }
  };

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
        <Typography variant="h4">Checkout</Typography>
        <form onSubmit={handleSubmit}>
          <Box mt={3}>
            <CardElement />
          </Box>
          <Box mt={3}>
            <Button type="submit" variant="contained" color="primary" disabled={!stripe}>
              Pay
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default CheckoutForm;

