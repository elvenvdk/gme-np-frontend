import axios from 'axios';
import moment from 'moment';

import { getStorage } from './auth';

const API_URL = process.env.REACT_APP_API_URL;

export const getSales = async () => {
  // const startDate = '2020-10-02T20:10:18.431Z';
  // const day = moment().startOf('day');
  // const startDate = day.toDate('2020-10-02T20:10:18.431Z');
  // const endDate = moment(day).endOf('day').toDate();
  const startDate = moment('2020-10-02T20:10:18.431Z').format('YYYYMMDD');
  const endDate = moment().format('YYYYMMDD');
  console.log({ startDate, endDate });
  try {
    const res = await axios.get(
      `${API_URL}/sales?org=${getStorage.orgId()}&startDate=${startDate}&endDate=${endDate}`,
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export default {
  getSales,
};
