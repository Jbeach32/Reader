import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, SIGNUP_USER } from './mutations'; // Define your mutations file

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginUser] = useMutation(LOGIN_USER);
  const [signupUser] = useMutation(SIGNUP_USER);

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
