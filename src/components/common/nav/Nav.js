import React, { useState } from 'react';

import Menu from '../menu/Menu';

import './Nav .scss';

const Nav = () => {
  return (
    <div className='nav'>
      <Menu />
      <h4 className='nav-menu-selection'>Grandma Emma's Non-Profit</h4>
    </div>
  );
};

export default Nav;
