import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';

import Tile from '../common/tile/Tile';
import Button from '../common/button/Button';
import './Goals.scss';

const Goals = () => {
  return (
    <div className='goals'>
      <h1 className='goals-header'>Goals</h1>
      <Link to='/sales-goal/settings'>
        <Button>Settings</Button>
      </Link>
      <div className='goals-tiles'>
        <Tile title='Sales Goal' data='$612.00' />
        <Tile title='Total Sales' data='$612.00' />
        <Tile title='Goal Diff' data='$612.00' />
        <Tile title='Sales Per Day' data='$612.00' />
        <Tile title='Sales goal' icon>
          <FontAwesomeIcon
            className='goals-chart-icon'
            icon={faChartBar}
            height='10px'
            width='10px'
          />
        </Tile>
      </div>
    </div>
  );
};

export default Goals;
