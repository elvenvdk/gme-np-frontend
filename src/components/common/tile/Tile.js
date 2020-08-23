import React from 'react';

import './Tile.scss';

const Tile = ({ title, data, icon }) => {
  return (
    <div className='tile'>
      <h3 className='tile-header'>{title}</h3>

      {icon ? (
        <div className='tile-icon'>{icon}</div>
      ) : (
        <div className='tile-data'>{data}</div>
      )}
    </div>
  );
};

export default Tile;
