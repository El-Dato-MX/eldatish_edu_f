import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Cancel = () => {
  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
        <Typography variant="h4" gutterBottom>
          Payment Cancelled
        </Typography>
        <Typography variant="body1">
          Your payment was cancelled. Please try again.
        </Typography>
      </Box>
    </Container>
  );
};

export default Cancel;

