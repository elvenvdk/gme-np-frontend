import axios from 'axios';

import { setStorage, getStorage, removeStorage } from './auth';

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

export const createMainGoal = async ({ amount }) => {
  try {
    const res = await axios.post(
      `${API_URL}/goals/create/main-goal?orgId=${getGoalStorage.orgId()}`,
      { amount },
    );
    setGoalStorage(res.data.goalId);
    return res.data;
  } catch (error) {
    
    if (error) return error.response.data;
  }
};

export const updateMainGoal = async ({ amount }) => {
  // console.log('From Sales API: ', { amount }, goalId, orgId);
  try {
    const res = await axios.put(
      `${API_URL}/goals/update/main-goal?goalId=${getGoalStorage.goalId()}&orgId=${getGoalStorage.orgId()}`,
      { amount },
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    
    if (error) return error.response.data;
  }
};

export const getMainGoal = async () => {
  try {
    const res = await axios.get(
      `${API_URL}/goals/main?orgId=${getGoalStorage.orgId()}`,
    );
    return res.data.amount;
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
  updateMainGoal,
  getMainGoal,
  getMainGoalDiff,
  setGoalStorage,
  getGoalStorage,
  removeGoalStorage,
};
