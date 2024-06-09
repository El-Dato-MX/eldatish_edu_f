import React from 'react';
import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Account from './components/auth/Account'
import CheckoutForm from './components/CheckoutForm';
import Success from './components/Success';  // Add success component
import Cancel from './components/Cancel';    // Add cancel component
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './stripe';
import Waitlist from './components/Waitlist';

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <Header /> {/* Include the Header component */}
      <Routes>
        <Route path="/" element={<Waitlist />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/success" element={<Success />} />  {/* Add success route */}
        <Route path="/cancel" element={<Cancel />} />    {/* Add cancel route */}
        <Route path="/paid-courses" element={<Waitlist />} />
        <Route path="/free-tutorials" element={<Waitlist />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Elements>
  );
}

export default App;

