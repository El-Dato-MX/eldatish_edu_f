import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

const CheckoutButton = () => {
  const handleCheckout = async () => {
    const response = await axios.post('/create-checkout-session');
    const { url } = response.data;
    //console.log(`https://checkout.stripe.com/pay/${id}`)
    window.location = `${url}`;
  };

  return (
    <Button variant="contained" color="primary" onClick={handleCheckout}>
      Checkout
    </Button>
  );
};

export default CheckoutButton;

