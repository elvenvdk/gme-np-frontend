import React from 'react';

import './Tile.scss';

const Tile = ({ title, data, icon, child, children, onClick, className }) => (
  <div className={`tile ${className}`} onClick={onClick}>
    <h3 className='tile-header'>{title}</h3>

    {icon ? (
      <div className='tile-icon'>{children}</div>
    ) : child ? (
      <> {children}</>
    ) : (
      <div className='tile-data'>{data}</div>
    )}
  </div>
);

export default Tile;
