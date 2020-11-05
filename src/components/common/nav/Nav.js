import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import api from '../../../api';

import Menu from '../menu/Menu';

import './Nav .scss';

const Nav = () => {
  return (
    <div className='nav'>
      <Menu />
      <h4 className='nav-company-name'>{api.getStorage.orgName()}</h4>
      {/* <FontAwesomeIcon className='nav-user-icon' icon={faUser} /> */}
    </div>
  );
};

export default Nav;
