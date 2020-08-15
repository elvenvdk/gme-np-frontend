import React from 'react';

import Form from './registrationForm/RegistrationForm';

import './Register.scss';

const Register = () => {
  return (
    <div className='registration'>
      <h1 className='registration-header'>Registration</h1>
      <Form hasCheckbox />
    </div>
  );
};

export default Register;
