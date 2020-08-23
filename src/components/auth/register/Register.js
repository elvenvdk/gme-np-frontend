import React from 'react';

import AuthForm from '../../common/authForm/AuthForm';

import './Register.scss';

const Register = () => {
  return (
    <div className='registration'>
      <h1 className='registration-header'>Registration</h1>
      <AuthForm hasCheckbox signup />
    </div>
  );
};

export default Register;
