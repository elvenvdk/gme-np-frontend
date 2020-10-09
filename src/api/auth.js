import axios from 'axios';
import { setGlobal } from 'reactn';
import { roleTypes } from './helpers';

const API_URL = process.env.REACT_APP_API_URL;

export const setStorage = ({
  userId,
  role,
  orgId,
  orgName,
  token,
  orgToken,
  goalId,
}) => {
  if (userId) localStorage.setItem('userId', JSON.stringify(userId));
  if (role) localStorage.setItem('role', JSON.stringify(role));
  if (orgId) localStorage.setItem('orgId', JSON.stringify(orgId));
  if (orgName) localStorage.setItem('orgName', JSON.stringify(orgName));
  if (token) localStorage.setItem('token', JSON.stringify(token));
  if (orgToken) localStorage.setItem('orgToken', JSON.stringify(orgToken));
  if (goalId && goalId !== 'N/A')
    localStorage.setItem('goalId', JSON.stringify(goalId));
};

export const getStorage = {
  userId: () => JSON.parse(localStorage.getItem('userId')),
  role: () => JSON.parse(localStorage.getItem('role')),
  orgId: () => JSON.parse(localStorage.getItem('orgId')),
  orgName: () => JSON.parse(localStorage.getItem('orgName')),
  token: () => JSON.parse(localStorage.getItem('token')),
};

export const removeStorage = () => {
  localStorage.clear();
};

/**
 *
 * @param {*} param {}
 */
export const register = async ({
  firstName,
  lastName,
  email,
  password,
  role,
  orgName,
  userName,
  org,
}) => {
  try {
    const res = await axios.post(`${API_URL}/auth/register`, {
      firstName,
      lastName,
      email,
      password,
      role,
      orgName,
      userName,
      org,
    });
    // console.log({ registerationResponse: res.data });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const registerOwner = async ({
  firstName,
  lastName,
  email,
  password,
  role,
  orgName,
  userName,
}) => {
  try {
    const res = await axios.post(`${API_URL}/auth/owner-registration`, {
      firstName,
      lastName,
      email,
      password,
      role,
      orgName,
      userName,
    });
    // console.log({ registerationResponse: res.data });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const login = async ({ email, password }) => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, { email, password });
    console.log(res);
    if (res?.data.role === roleTypes.SELLER)
      return {
        error:
          'Sellers cannot use this application.  Please log in to the Fund-Raiser Sales App.',
      };
    setStorage({
      userId: res.data.id,
      role: res.data.role,
      token: res.data.token,
      orgId: res.data.orgId,
      orgToken: res.data.orgToken,
      orgName: res.data.orgName,
      goalId: res.data.goalId,
    });
    setGlobal({
      userId: res.data.id,
      role: res.data.role,
      token: res.data.token,
      orgId: res.data.orgId,
      orgToken: res.data.orgToken,
      orgName: res.data.orgName,
      goalId: res.data.goalId,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const logout = async () => {
  try {
    const res = await axios.post(
      `${API_URL}/auth/logout?userId=${getStorage.userId()}`,
    );
    removeStorage();
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const userLogout = async ({ email }) => {
  try {
    const res = await axios.post(`${API_URL}/auth/logout?email=${email}`);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const lockoutComplete = async ({ email }) => {
  try {
    const res = await axios.post(`${API_URL}/auth/lockout?email=${email}`);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const emailVerificationCheck = async (token) => {
  try {
    const res = await axios.post(
      `${API_URL}/auth/email-verification?token=${token}`,
    );

    if (res.data.role !== roleTypes.SELLER) {
      setStorage({
        userId: res.data.id,
        role: res.data.role,
        token: res.data.token,
      });
      setGlobal({
        userId: res.data.id,
        role: res.data.role,
      });
    }

    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const forgotPassword = async ({ email }) => {
  try {
    const res = await axios.post(`${API_URL}/forgot-password`, {
      email,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const forgotPasswordVerification = async (token) => {
  try {
    const res = await axios.post(
      `${API_URL}/forgot-password-verification?token${token}`,
    );
    console.log({ forgotPasswordVerification_Response: res.data });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export default {
  setStorage,
  getStorage,
  removeStorage,
  register,
  registerOwner,
  login,
  logout,
  lockoutComplete,
  userLogout,
  emailVerificationCheck,
  forgotPassword,
  forgotPasswordVerification,
};
