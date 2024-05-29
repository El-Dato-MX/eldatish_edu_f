import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
        <Typography variant="h4" gutterBottom>
          Payment Successful
        </Typography>
        <Typography variant="body1">
          Thank you for your purchase!
        </Typography>
        <Button component={Link} to="/account" variant="contained" color="primary" mt={2}>
          Go to My Account
        </Button>
      </Box>
    </Container>
  );
};

export default Success;

