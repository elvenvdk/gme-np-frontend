import React from 'react';

const MobileMenu = () => {
  const renderMenu = () => (
    <ul className='mobile-menu-list'>
      <li className='mobile-menu-list-item'>Log Out</li>
      <li className='mobile-menu-list-item'>User Management</li>
      <li className='mobile-menu-list-item'>Goals</li>
    </ul>
  );

  return <div className='mobile-menu'>{renderMenu()}</div>;
};

export default MobileMenu;
