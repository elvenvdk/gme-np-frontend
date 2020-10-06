import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Space, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import api from '../../api';
import { formatCurrency, formatPercentage } from '../../helpers/Helpers';
import Button from '../common/button/Button';
import Tile from '../common/tile/Tile';
import './Goals.scss';

const Goals = () => {
  const [goalDiffTypes, setGoalDiffTypes] = useState({
    dollar: true,
    perc: false,
  });
  const { dollar, perc } = goalDiffTypes;
  const [goals, setGoals] = useState({
    mainGoal: 0,
    dayGoal: 0,
  });
  const { mainGoal, dayGoal } = goals;
  const [sales, setSales] = useState({
    count: 0,
    total: 0,
  });
  const { count, total } = sales;

  const [message, setMessage] = useState({
    error: '',
    confirmation: '',
  });
  const { error, confirmation } = message;

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

  const getTotalSales = async () => {
    try {
      setLoading(true);
      const res = await api.getSales();
      setSales({
        ...sales,
        count: res.salesCount,
        total: res.orderTotal,
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
    getTotalSales();
  }, []);

  const diffType = {
    dollar: () => total - mainGoal,
    percentage: () => (total - mainGoal) / mainGoal,
  };

  const diffTypeSelector = () => {
    return (
      <div>
        <h4>Total/Goal Difference</h4>
        <select id='goal-diff-selector' onChange={handleDiffTypeChange}>
          <option value='dollar' id='dollar'>
            $
          </option>
          <option value='percentage' id='percentage'>
            %
          </option>
        </select>
      </div>
    );
  };

  const handleDiffTypeChange = (e) => {
    setGoalDiffTypes({
      ...goalDiffTypes,
      dollar: e.target.value === 'dollar' ? true : false,
      percentage: e.target.value === 'percentage' ? true : false,
    });
  };

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
            <Tile title='Sales Goal' data={formatCurrency(mainGoal)} />
            <Tile title='Total Sales' data={formatCurrency(total)} />
            <Tile
              title={diffTypeSelector()}
              data={
                dollar
                  ? formatCurrency(diffType.dollar())
                  : formatPercentage(diffType.percentage())
              }
            />
            <Tile title='Charts' icon>
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
