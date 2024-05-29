import React from 'react';
import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Account from './components/Account';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import CheckoutForm from './components/CheckoutForm';
import Success from './components/Success';  // Add success component
import Cancel from './components/Cancel';    // Add cancel component
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './stripe';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './AuthContext';
import Waitlist from './components/Waitlist';

const App = () => {
  return (
   <AuthProvider>
    <Elements stripe={stripePromise}>
      <Header /> {/* Include the Header component */}
      <Routes>
        <Route path="/" element={<Waitlist />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/success" element={<Success />} />  {/* Add success route */}
        <Route path="/cancel" element={<Cancel />} />    {/* Add cancel route */}
        <Route path="/account/:userId" element={ <ProtectedRoute> <Account /> </ProtectedRoute> } />
        <Route path="/paid-courses" element={<Waitlist />} />
        <Route path="/free-tutorials" element={<Waitlist />} />
      </Routes>
    </Elements>
   </AuthProvider>
  );
}

export default App;

