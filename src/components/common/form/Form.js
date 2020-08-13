import React, { useState } from 'react';

import './Form.scss';

const Form = ({ hasCheckbox }) => {
  const [inputData, setInputData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    type: 'seller',
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
      type: e.target.checked ? 'admin' : 'seller',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
  };

  const { firstName, lastName, email, password, type } = inputData;

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
            name='isAdmin'
            onChange={(e) => handleAdminCheckbox(e)}
            id='admin-checkbox'
            value={type}
          />
          <label
            className='form-container-checkbox-group-label'
            htmlFor='admin-checkbox'
          >
            Admin
          </label>
        </div>
      )}
      <input type='submit' className='form-container-input submit' />
    </form>
  );

  console.log(inputData);

  return <div className='form'>{renderForm()}</div>;
};

export default Form;
