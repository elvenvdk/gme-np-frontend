import React from 'react';

import './Tile.scss';

const Tile = ({
  title,
  data,
  icon,
  child,
  children,
  onClick,
  className,
  titleClassname,
  iconClassname,
  dataClassname,
  onMouseOver,
  onMouseLeave,
}) => (
  <div 
    className={`tile ${className}`} 
    onClick={onClick} 
    onMouseOver={onMouseOver} 
    onMouseLeave={onMouseLeave}
    onMouseDown={onMouseOver}
    onMouseUp={onMouseLeave}
  >
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
