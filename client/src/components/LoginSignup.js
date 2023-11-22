import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, SIGNUP_USER } from '../../../mutations'; // Define your mutations file

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Use the useMutation hook for login
  const [loginUser] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      // Handle successful login, e.g., update state or navigate to another page
      console.log('Login successful!', data);
      // Add your post-login actions here
    },
    onError: (error) => {
      // Handle login error, e.g., display an error message
      console.error('Login error:', error.message);
    },
  });

  // Use the useMutation hook for signup
  const [signupUser] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      // Handle successful signup, e.g., update state or navigate to another page
      console.log('Signup successful!', data);
      // Add your post-signup actions here
    },
    onError: (error) => {
      // Handle signup error, e.g., display an error message
      console.error('Signup error:', error.message);
    },
  });

  const handleToggle = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = async () => {
    if (isSignup) {
      await signupUser({ variables: { email, password } });
    } else {
      await loginUser({ variables: { email, password } });
    }

    // Handle post-login/signup actions as needed
    // You can add additional logic here based on the user's login/signup status
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isSignup ? 'Switch to Login' : 'Switch to Signup'}
      </button>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>{isSignup ? 'Signup' : 'Login'}</button>
    </div>
  );
};

export default LoginSignup;
