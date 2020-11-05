import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { VictoryChart, VictoryTheme, VictoryBar, VictoryAxis } from 'victory';
import moment from 'moment';

import api from '../../api';

import './SalesChart.scss';

const SalesChart = ({ hideChart }) => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const getSales = async () => {
    let salesArr = [];
    try {
      setLoading(true);
      const res = await api.getSales();
      for (let el of res.salesData) {
        salesArr.push({
          date: moment(el.date).format('MMM Do'),
          totals: parseInt(el.totals, 10),
        });
      }

      setSalesData(salesArr);
      setLoading(false);
    } catch (error) {
      setErrorMessage(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSales();
  }, []);

  console.log({salesData});
  if (!salesData.length) return(<> <h3 className='no-sales-yet'>NO SALES YET</h3> <p className='return-to-goals hide' role='p' onClick={() => hideChart()}>
  Click here to return to Goals
</p></>)
  return (
    <div className='sales-chart'>
      <h2 className='sales-chart-title'>Sales Data</h2>
      <p className='sales-chart-hide' role='p' onClick={() => hideChart()}>
        Hide sales chart
      </p>
      <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
        <VictoryAxis
          tickFormat={(y) => y}
          style={{ tickLabels: { fontSize: 7 } }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => `$${x}`}
          style={{ tickLabels: { fontSize: 7 } }}
        />
        <VictoryBar
          data={salesData}
          x='date'
          y='totals'
          barWidth={salesData.length < 3 ? 20 : 10}
          style={{ data: { fill: '#2D9FD1' } }}
        />
      </VictoryChart>
    </div>
  );
};

export default SalesChart;
