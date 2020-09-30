import axios from 'axios';

import { setStorage, getStorage } from './auth';

const API_URL = process.env.REACT_APP_API_URL;

export const setGoalStorage = (goalId) => {
  if (goalId) localStorage.setItem('goalId', JSON.stringify(goalId));
};

export const getGoalStorage = {
  goalId: () => JSON.parse(localStorage.getItem('goalId')),
  orgId: () => JSON.parse(localStorage.getItem('orgId')),
  orgName: () => JSON.parse(localStorage.getItem('orgName')),
};

export const removeGoalStorage = () => {
  localStorage.removeItem('goalId');
};

export const createMainGoal = async ({ amount }, goalId, orgId) => {
  console.log('From Sales API: ', { amount }, goalId, orgId);
  try {
    const res = await axios.post(
      `${API_URL}/goals/create/main-goal?goalId=${goalId}&orgId=${orgId}`,
      { amount },
    );
    console.log({ res });
    return res.data;
  } catch (error) {
    if (error) return error.response.data;
  }
};

export const createDayGoal = async ({ amount }, goalId, orgId) => {
  try {
    const res = await axios.post(
      `${API_URL}/goals/create/day-goal?goalId=${goalId}&orgId=${orgId}`,
      { amount },
    );
    return res.data;
  } catch (error) {
    if (error) return error.response.data;
  }
};

export const getMainGoal = async (orgId) => {
  try {
    const res = await axios.get(`${API_URL}/goals/main?orgId=${orgId}`);
    return res.data;
  } catch (error) {
    if (error) return error.response.data;
  }
};

export const getDayGoal = async (orgId) => {
  try {
    const res = await axios.get(`${API_URL}/goals/salesday?orgId=${orgId}`);
    return res.data;
  } catch (error) {
    if (error) return error.response.data;
  }
};

export const getMainGoalDiff = async (orgId) => {
  try {
    const res = await axios.get(
      `${API_URL}/goals/main-goal-diff?orgId=${orgId}`,
    );
    return res.data;
  } catch (error) {
    if (error) return error.response.data;
  }
};

export default {
  createMainGoal,
  createDayGoal,
  getMainGoal,
  getDayGoal,
  getMainGoalDiff,
  setGoalStorage,
  getGoalStorage,
  removeGoalStorage,
};
