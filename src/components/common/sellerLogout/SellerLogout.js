import React, { useState } from 'react';

import api from '../../../api';

import './SellerLogout.scss';

const SellerLogout = ({ onClick }) => {
  const [email, setEmail] = useState('');
  const [lockout, setLockout] = useState(false);
  const [message, setMessage] = useState({
    error: null,
    confirmation: null,
  });

  const { error, confirmation } = message;

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLockoutChange = (e) => {
    setLockout(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (lockout) {
        const res = await api.lockoutComplete(email);
        setMessage({
          ...message,
          confirmation: res.msg,
        });
        return;
      }
      const res = await api.logout(email);
      setMessage({
        ...message,
        confirmation: res.msg,
      });
    } catch (error) {
      setMessage({
        ...message,
        error,
      });
    }
  };
  return (
    <div className='seller-logout'>
      <form className='seller-logout-form' onSubmit={handleSubmit}>
        <label className='seller-logout-form-label' htmlFor='email'>
          Email
        </label>
        <input
          className='seller-logout-form-input'
          type='email'
          id='email'
          name='email'
          value={email}
          onChange={(e) => handleInputChange(e)}
        />
        <label htmlFor='lockout-checkout'>Lock out user?</label>
        <input
          type='checkbox'
          name='lockout'
          id='lockout-checkbox'
          value={lockout}
        />
        <input
          role='submit'
          value='Submit'
          type='submit'
          onChange={(e) => handleLockoutChange(e)}
        />
      </form>
      <p onClick={onClick}>Back to User Management</p>
    </div>
  );
};

export default SellerLogout;
