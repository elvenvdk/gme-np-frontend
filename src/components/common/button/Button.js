import React from 'react';

import './Button.scss';

const Button = ({ value, type, onClick, children }) => {
  return (
    <>
      <button className='button' value={value} type={type} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
