import React from 'react';

import './Button.scss';

const Button = ({ value, type, onClick, children, className }) => {
  return (
    <>
      <button className={`button ${className}`} value={value} type={type} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
