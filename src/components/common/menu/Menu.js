import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../../api';
import Hamburger from './hamburger/Hamburger';

import './Menu.scss';

const Menu = () => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);

  const handleLogout = () => {
    api.logout();
    setVisible(false);
    history.push('/auth/login');
  };

  const handleSelected = () => {
    setVisible(false);
  };

  const renderMenu = () => (
    <ul className='menu-list'>
      <li className='menu-list-item' onClick={() => handleLogout()}>
        Log Out
      </li>
      <li onClick={() => handleSelected()} className='menu-list-item'>
        <Link className='menu-list-item-link' to='/sales/user-management'>
          User Management
        </Link>
      </li>
      <li onClick={() => handleSelected()} className='menu-list-item'>
        <Link className='menu-list-item-link' to='/sales/goals'>
          Goals
        </Link>
      </li>
      <li onClick={() => handleSelected()} className='menu-list-item'>
        <Link className='menu-list-item-link' to='/sales/goal-settings'>
          Goal Settings
        </Link>
      </li>
    </ul>
  );

  return (
    <div className='menu'>
      <Hamburger onClick={() => setVisible(!visible)} />
      {visible && renderMenu()}
    </div>
  );
};

export default Menu;
