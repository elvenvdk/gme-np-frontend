import React from 'react';

import './Tile.scss';

const Tile = ({ title, data, icon, child, children, onClick, className, titleClassname, iconClassname, dataClassname }) => (
  <div className={`tile ${className}`} onClick={onClick}>
    <h3 className={`tile-header ${titleClassname}`}>{title}</h3>

    {icon ? (
      <div className={`tile-icon ${iconClassname}`}>{children}</div>
    ) : child ? (
      <> {children}</>
    ) : (
      <div className={`tile-data ${dataClassname}`}>{data}</div>
    )}
  </div>
);

export default Tile;
