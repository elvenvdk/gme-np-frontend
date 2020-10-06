import React, { useEffect, useState } from 'react';
import { setGlobal } from 'reactn';
import { Spin, Space } from 'antd';

import Tile from '../common/tile/Tile';
import { formatCurrency } from '../../helpers/Helpers';
import api from '../../api';

import './GoalSettings.scss';

const GoalSettings = () => {
  const [goals, setGoals] = useState({
    salesGoal: 0,
  });

  const { salesGoal } = goals;

  const [message, setMessage] = useState({
    error: '',
    confirmation: '',
  });

  const [loading, setLoading] = useState(false);

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

    if (api.getGoalStorage.goalId()) {
      try {
        setLoading(true);
        const res = await api.updateMainGoal({ amount });
        setGoals({
          ...goals,
          salesGoal: 0,
        });
        setLoading(false);
        setMessage({
          ...message,
          confirmation: res.msg,
        });
        return;
      } catch (error) {
        setLoading(false);
        setMessage({
          ...message,
          error,
        });
        return;
      }
    }

    try {
      setLoading(true);
      const res = await api.createMainGoal({ amount });
      console.log(res);
      setGoals({
        ...goals,
        salesGoal: 0,
      });
      setLoading(false);
      setMessage({
        ...message,
        confirmation: res.msg,
      });
    } catch (error) {
      setLoading(false);
      setMessage({
        ...message,
        error,
      });
    }
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
          <br />
          {message.confirmation ? (
            <p>{message.confirmation}</p>
          ) : message.error ? (
            <p>{message?.error}</p>
          ) : (
            <></>
          )}
          <input
            type='button'
            className='goalsettings-tiles-input-btn'
            value='Enter Sales Goal'
            onClick={handleSubmitSalesGoal}
          />
        </Tile>
      </div>
    </div>
  );
};

export default GoalSettings;
