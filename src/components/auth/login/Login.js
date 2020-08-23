import React from 'react';

import AuthForm from '../../common/authForm/AuthForm';
import './Login.scss';

const Login = () => {
  return (
    <div className='login'>
      <h1 className='login-header'>Log In</h1>
      <AuthForm />
    </div>
  );
};

export default Login;
