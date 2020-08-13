import React from 'react';

import './Hamburger.scss';

export default ({ onClick }) => (
  <div className='hamburger' onClick={onClick}>
    <div className='hamburger-line' />
    <div className='hamburger-line' />
    <div className='hamburger-line' />
  </div>
);
