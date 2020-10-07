import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../../api';
import Hamburger from './hamburger/Hamburger';

import './Menu.scss';

const Menu = () => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    error: '',
    confirmation: '',
  });

  const { error, confirmation } = message;

  const handleLogout = async () => {
    try {
      const res = await api.logout();
      setVisible(false);
      return history.push('/auth/login');
    } catch (error) {}
  };

  const handleSelected = () => {
    setVisible(false);
  };

  const renderMenu = () => (
    <ul className='menu-list'>
      <li className='menu-list-item logout' onClick={() => handleLogout()}>
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
