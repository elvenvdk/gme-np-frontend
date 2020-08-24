import React from 'react';
import Goals from '../goals/Goals';
import Tile from '../common/tile/Tile';

import './GoalSettings.scss';

const GoalSettings = () => {
  return (
    <div className='goalsettings'>
      <h1 className='goalsettings-header'>Goal Settings</h1>
      <div className='goalsettings-tiles'>
        <Tile title='Sales Goal' data='$1,000,000.00' />
        <Tile title='Goals Per Day' data='$20,000.00' />
      </div>
    </div>
  );
};

export default GoalSettings;
