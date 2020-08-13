import React, { useState } from 'react';

import api from '../../../api';
import { register } from '../../../api/auth';

import './Form.scss';

const inputDefaults = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  role: 'seller',
};

const Form = ({ hasCheckbox }) => {
  const [inputData, setInputData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'seller',
  });

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdminCheckbox = (e) => {
    setInputData({
      ...inputData,
      role: e.target.checked ? 'admin' : 'seller',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputData);
    const response = await register(inputData);
    if (response?.error) console.log(response?.error);
    console.log(response);
    setInputData({ ...inputDefaults });
  };

  const { firstName, lastName, email, password, role } = inputData;

  const renderForm = () => (
    <form onSubmit={(e) => handleSubmit(e)} className='form-container'>
      <input
        type='text'
        className='form-container-input'
        name='firstName'
        value={firstName}
        onChange={(e) => handleChange(e)}
        placeholder='First Name'
      />
      <input
        type='text'
        className='form-container-input'
        name='lastName'
        value={lastName}
        onChange={(e) => handleChange(e)}
        placeholder='Last Name'
      />
      <input
        type='email'
        className='form-container-input'
        name='email'
        value={email}
        onChange={(e) => handleChange(e)}
        placeholder='Email'
      />
      <input
        type='password'
        className='form-container-input'
        name='password'
        value={password}
        onChange={(e) => handleChange(e)}
        placeholder='Password'
      />
      {hasCheckbox && (
        <div className='form-container-checkbox-group'>
          <input
            type='checkbox'
            className='form-container-checkbox-group-checkbox'
            name='role'
            onChange={(e) => handleAdminCheckbox(e)}
            id='admin-checkbox'
            value={role}
          />
          <label
            className='form-container-checkbox-group-label'
            htmlFor='admin-checkbox'
          >
            Admin
          </label>
        </div>
      )}
      <input
        type='submit'
        className='form-container-input submit'
        value='Register'
      />
    </form>
  );

  return <div className='form'>{renderForm()}</div>;
};

export default Form;
