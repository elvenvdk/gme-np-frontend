import React, { useState } from 'react';
import AuthForm from '../../common/authForm/AuthForm';
import SellerLogout from '../../common/sellerLogout/SellerLogout';
import Tile from '../../common/tile/Tile';

import './UserManagement.scss';

const UserManagement = () => {
  const [visible, setVisible] = useState({
    registration: false,
    userLogout: false,
    tiles: true,
  });

  const { registration, userLogout, tiles } = visible;

  const handleShowRegistration = () => {
    setVisible({
      ...visible,
      registration: true,
      userLogout: false,
      tiles: false,
    });
  };

  const handleShowLogout = () => {
    setVisible({
      ...visible,
      registration: false,
      userLogout: true,
      tiles: false,
    });
  };

  const handleResetVisible = () => {
    setVisible({
      ...visible,
      registration: false,
      userLogout: false,
      tiles: true,
    });
  };

  return (
    <div className='user-management'>
      <h1 className='user-management-header'>User Management</h1>
      {tiles ? (
        <div className='user-management-tiles'>
          <Tile
            title='Register a Seller'
            className='user-management-tiles-box'
            onClick={handleShowRegistration}
          />
          <Tile
            title='Log out a Seller'
            className='user-management-tiles-box'
            onClick={handleShowLogout}
          />
        </div>
      ) : (
        <></>
      )}

      {registration ? (
        <AuthForm signup hasCheckbox userMngt onClick={handleResetVisible} />
      ) : (
        <></>
      )}
      {userLogout ? <SellerLogout /> : <></>}
    </div>
  );
};

export default UserManagement;
