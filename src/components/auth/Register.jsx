// Register.js
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../auth'
import { TextField, Button, Container, Typography } from '@mui/material';

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate() // Use navigate hook

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)  // Reset error state
    try {
      await signUp(email, password)
      alert('Registration successful! Please check your email to confirm.')
      navigate('/signin')  // Redirect to login page
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <Container>
      <Typography variant="h4">Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
        {error && <Typography color="error">{error}</Typography>}
      </form>
    </Container>
  );

}

export default Register

