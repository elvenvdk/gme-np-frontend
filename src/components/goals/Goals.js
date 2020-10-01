import React, { useEffect, useState } from 'react';
import { Spin, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';

import { Link, Redirect } from 'react-router-dom';

import { formatCurrency } from '../../helpers/Helpers';

import api from '../../api';

import Tile from '../common/tile/Tile';
import Button from '../common/button/Button';
import './Goals.scss';

const Goals = () => {
  // const [goals] = useGlobal('goals');
  const [goals, setGoals] = useState({
    mainGoal: 0,
    dayGoal: 0,
  });

  const [message, setMessage] = useState({
    error: '',
    confirmation: '',
  });

  const [loading, setLoading] = useState(true);

  const getMainGoal = async () => {
    try {
      setLoading(true);
      const res = await api.getMainGoal(api.getStorage.orgId());
      setGoals({ ...goals, mainGoal: res });
      setLoading(false);
      setMessage({
        ...message,
        confirmation: res.msg,
      });
    } catch (error) {
      setMessage({
        ...message,
        error,
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    getMainGoal();
  }, []);

  console.log({ mainGoal: goals.mainGoal });

  if (!api.getStorage.orgId())
    return <Redirect to='/sales/organization-registration' />;

  // if (!goals.mainGoal) return <p>Loading Sales Goals</p>;
  if (!goals.mainGoal)
    return (
      <div style={{ height: '100vh', width: '100vw' }}>
        <Space size='middle'>
          <Spin size='large' />
        </Space>
      </div>
    );

  return (
    <div className='goals'>
      <h1 className='goals-header'>Goals</h1>
      {loading ? (
        <Space size='large'>
          <Spin size='large' />
        </Space>
      ) : (
        <>
          <Link className='goals-settings-link' to='/sales/goal-settings'>
            <Button>Settings</Button>
          </Link>
          <div className='goals-tiles'>
            <Tile title='Sales Goal' data={formatCurrency(goals.mainGoal)} />
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
        </>
      )}
    </div>
  );
};

export default Goals;
