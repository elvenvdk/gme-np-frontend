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
}) => {
  if (userId) localStorage.setItem('userId', JSON.stringify(userId));
  if (role) localStorage.setItem('role', JSON.stringify(role));
  if (orgId) localStorage.setItem('orgId', JSON.stringify(orgId));
  if (orgName) localStorage.setItem('orgName', JSON.stringify(orgName));
  if (token) localStorage.setItem('token', JSON.stringify(token));
  if (orgToken) localStorage.setItem('orgToken', JSON.stringify(orgToken));
};

export const getStorage = {
  userId: () => JSON.parse(localStorage.getItem('userId')),
  role: () => JSON.parse(localStorage.getItem('role')),
  orgId: () => JSON.parse(localStorage.getItem('orgId')),
  orgName: () => JSON.parse(localStorage.getItem('orgName')),
  token: () => JSON.parse(localStorage.getItem('token')),
};

export const removeStorage = () => {
  localStorage.removeItem('userId');
  localStorage.removeItem('role');
  localStorage.removeItem('orgId');
  localStorage.removeItem('orgName');
  localStorage.removeItem('userId');
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
  org,
}) => {
  try {
    const res = await axios.post(`${API_URL}/auth/register`, {
      firstName,
      lastName,
      email,
      password,
      role,
      org,
    });
    // console.log({ registerationResponse: res.data });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const login = async ({ email, password }) => {
  console.log({ email, password });
  try {
    const res = await axios.post(`${API_URL}/auth/login`, { email, password });
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
    });
    setGlobal({
      userId: res.data.id,
      role: res.data.role,
      token: res.data.token,
      orgId: res.data.orgId,
      orgToken: res.data.orgToken,
      orgName: res.data.orgName,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const logout = () => {
  removeStorage();
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
        role: res.data.rol,
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
  login,
  logout,
  emailVerificationCheck,
  forgotPassword,
  forgotPasswordVerification,
};
