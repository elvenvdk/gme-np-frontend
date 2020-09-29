import axios from 'axios';

import { setStorage, getStorage } from './auth';

const API_URL = process.env.REACT_APP_API_URL;

export const createMainGoal = async ({ amount }, goalId, orgId) => {
  try {
    const res = await axios.post(
      `${API_URL}/create/main-goal?goalId=${goalId}&orgId=${orgId}`,
      { amount },
    );
    return res.data;
  } catch (error) {
    if (error) return error.response.data;
  }
};

export const createDayGoal = async ({ amount }, goalId, orgId) => {
  try {
    const res = await axios.post(
      `${API_URL}/create/day-goal?goalId=${goalId}&orgId=${orgId}`,
      { amount },
    );
    return res.data;
  } catch (error) {
    if (error) return error.response.data;
  }
};

export const getMainGoal = async (orgId) => {
  try {
    const res = await axios.get(`${API_URL}/main?orgId=${orgId}`);
    return res.data;
  } catch (error) {
    if (error) return error.response.data;
  }
};

export const getGoalPerDay = async (orgId) => {
  try {
    const res = await axios.get(`${API_URL}/day?orgId=${orgId}`);
    return res.data;
  } catch (error) {
    if (error) return error.response.data;
  }
};

export default {
  createMainGoal,
  createDayGoal,
  getMainGoal,
};
