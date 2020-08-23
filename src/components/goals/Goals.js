import React, { useEffect, useState } from 'react';

import Tile from '../common/tile/Tile';
import './Goals.scss';

const Goals = () => {
  return (
    <div className='goals'>
      <h1 className='goals-header'>Goals</h1>
      <button>PLACEHOLDER SETTINGS BUTTON</button>
      <div className='goals-tiles'>
        <Tile title='Sales goal' data='$612.00' />
        <Tile title='Sales goal' data='$612.00' />
        <Tile title='Sales goal' data='$612.00' />
        <Tile title='Sales goal' data='$612.00' />
      </div>
    </div>
  );
};

export default Goals;
