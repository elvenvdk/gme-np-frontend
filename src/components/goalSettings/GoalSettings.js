import React, { useEffect, useState } from 'react';
import { setGlobal } from 'reactn';

import Tile from '../common/tile/Tile';
import { formatCurrency } from '../../helpers/Helpers';
import api from '../../api';

import './GoalSettings.scss';

const GoalSettings = () => {
  const [goals, setGoals] = useState({
    salesGoal: 0,
    goalsPerDay: 0,
  });

  const { salesGoal, goalsPerDay } = goals;

  const handleGoals = (e) => {
    setGoals({
      ...goals,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitSalesGoal = async () => {
    setGlobal({ salesGoal });
    let amount = parseInt(salesGoal, 10);
    console.log(amount);
    try {
      const res = await api.createMainGoal(
        { amount },
        api.getGoalStorage.goalId(),
        api.getGoalStorage.orgId(),
      );
      console.log(res);
    } catch (error) {
      console.log({ error });
    }
  };

  const handleSubmitGoalsPerDay = () => {
    console.log(goalsPerDay);
    setGlobal({ goalsPerDay });
  };

  console.log(goals);

  return (
    <div className='goalsettings'>
      <h1 className='goalsettings-header'>Goal Settings</h1>
      <div className='goalsettings-tiles'>
        <Tile title='Sales Goal' child>
          <input
            type='text'
            className='goalsettings-tiles-input'
            value={salesGoal}
            name='salesGoal'
            onChange={(e) => handleGoals(e)}
          />
          <input
            type='button'
            className='goalsettings-tiles-input-btn'
            value='Enter Sales Goal'
            onClick={handleSubmitSalesGoal}
          />
        </Tile>
        <Tile title='Goals per Day' child>
          <input
            type='text'
            className='goalsettings-tiles-input'
            value={goalsPerDay}
            name='goalsPerDay'
            onChange={(e) => handleGoals(e)}
          />
          <input
            type='button'
            className='goalsettings-tiles-input-btn'
            value='Enter Goals per Day'
            onClick={handleSubmitGoalsPerDay}
          />
        </Tile>
      </div>
    </div>
  );
};

export default GoalSettings;
