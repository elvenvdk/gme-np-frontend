import React, { useEffect, useState } from 'react';
import { useGlobal } from 'reactn';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { formatCurrency } from '../../helpers/Helpers';

import api from '../../api';

import Tile from '../common/tile/Tile';
import Button from '../common/button/Button';
import './Goals.scss';

const Goals = () => {
  const [goals] = useGlobal('goals');
  const [_goals, set_Goals] = useGlobal(null);

  useEffect(() => {
    set_Goals(goals);
  }, []);

  if (!api.getStorage.orgId())
    return <Redirect to='/sales/organization-registration' />;

  return (
    <div className='goals'>
      <h1 className='goals-header'>Goals</h1>
      <Link className='goals-settings-link' to='/sales/goal-settings'>
        <Button>Settings</Button>
      </Link>
      <div className='goals-tiles'>
        <Tile title='Sales Goal' data={'$12,000.00'} />
        <Tile title='Total Sales' data='$6,712.00' />
        <Tile title='Goal Diff' data='$5,001.00' />
        <Tile title='Sales Per Day' data='$1,000.00' />
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
