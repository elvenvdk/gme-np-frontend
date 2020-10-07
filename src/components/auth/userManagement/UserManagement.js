import React from 'react';
import AuthForm from '../../common/authForm/AuthForm';

import './UserManagement.scss';

const UserManagement = () => {
  return (
    <div className='user-management'>
      <h1 className='user-management-header'>Seller Registration</h1>
      <AuthForm signup hasCheckbox userMngt />
    </div>
  );
};

export default UserManagement;
