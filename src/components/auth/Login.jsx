// Login.js
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../auth'
import { TextField, Button, Container, Typography } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate() // Use navigate hook


  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)  // Reset error state
    try {
      const { data, error } = await login(email, password)
      if (data) {
	console.log(data.user)
        console.log('Login successful!')
        navigate('/account', { state: data })  // Redirect to user account page with user data
      } else {
        conole.log(error)
        setError('Login failed. Please try again.')
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <Container>
      <Typography variant="h4">Login</Typography>
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
          Login
        </Button>
        {error && <Typography color="error">{error}</Typography>}
      </form>
    </Container>
  );
}

export default Login

