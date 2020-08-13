import React, { useState } from 'react';

import Hamburger from './hamburger/Hamburger';

import './Menu.scss';

const Menu = () => {
  const [visible, setVisible] = useState(false);
  const renderMenu = () => (
    <ul className='menu-list'>
      <li className='menu-list-item'>Log Out</li>
      <li className='menu-list-item'>User Management</li>
      <li className='menu-list-item'>Goals</li>
    </ul>
  );

  console.log({ visible });

  return (
    <div className='menu'>
      <Hamburger onClick={() => setVisible(!visible)} />
      {visible && renderMenu()}
    </div>
  );
};

export default Menu;
