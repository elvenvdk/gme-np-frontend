import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { register, login } from '../../../api/auth';

import './AuthForm.scss';

const inputDefaults = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  role: 'seller',
};

const Form = ({ hasCheckbox, signup }) => {
  const history = useHistory();
  const [inputData, setInputData] = useState(inputDefaults);

  const { firstName, lastName, email, password, role } = inputData;

  const [errorMessage, setErrorMessage] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const handleOwnerCheckbox = (e) => {
    setInputData({
      ...inputData,
      role: e.target.checked && 'owner',
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (signup) {
      const response = await register(inputData);
      console.log(response);
      if (response?.error) {
        setErrorMessage(response.error);
        setLoading(false);
      }
      setInputData({ ...inputDefaults });
      setConfirmationMessage(response.msg);
      setLoading(false);
      return;
    }
    const response = await login({ email, password });
    if (response?.error) setErrorMessage(response.error);
  };

  const renderForm = () => (
    <form onSubmit={(e) => handleSubmit(e)} className='form-container'>
      {signup && (
        <>
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
        </>
      )}

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
      {hasCheckbox && signup && (
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

          <input
            type='checkbox'
            className='form-container-checkbox-group-checkbox'
            name='role'
            onChange={(e) => handleOwnerCheckbox(e)}
            id='admin-checkbox'
            value={role}
          />
          <label
            className='form-container-checkbox-group-label'
            htmlFor='admin-checkbox'
          >
            Owner
          </label>
        </div>
      )}
      {errorMessage && (
        <div className='form-container-error'>{errorMessage}</div>
      )}
      <input
        type='submit'
        className='form-container-input submit'
        value={`${signup ? 'Register' : 'Log in'}`}
      />
      {!signup ? <p>Not registered yet?</p> : <p>Already registered?</p>}
      <input
        type='submit'
        className='form-container-input register-btn'
        value={`${!signup ? 'Register' : 'Log in'}`}
        onClick={() =>
          history.push(`${!signup ? '/user/registration' : '/user/login'}`)
        }
      />
    </form>
  );

  return (
    <div className='form'>
      {renderForm()}
      {confirmationMessage ? (
        <p>{confirmationMessage}</p>
      ) : errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Form;
