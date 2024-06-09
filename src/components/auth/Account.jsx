// src/components/Account.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const Account = () => {
  const location = useLocation();
  const { user } = location.state || {};

  return (
    <Container>
      <Typography variant="h4">User Account</Typography>
      {user ? (
        <Typography>Welcome, {user.email}! {user.id}</Typography>
      ) : (
        <Typography>No user data available.</Typography>
      )}
    </Container>
  );
};

export default Account;

