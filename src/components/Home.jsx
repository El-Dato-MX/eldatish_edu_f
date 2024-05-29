import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Typography, Box } from '@mui/material';
import CheckoutButton from './CheckoutButton';

const Home = () => {
  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
        <Typography variant="h2" gutterBottom>
          Learn to Code with Basketball
        </Typography>
        <Typography variant="h5" gutterBottom>
          Turn your passion for Basketball into programming skills.
        </Typography>
        <CheckoutButton />
        <Box mt={2}>
          <Link to="/account">
            <Button variant="outlined" color="secondary">
              Account Management
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;

