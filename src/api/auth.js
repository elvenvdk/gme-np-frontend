import axios from 'axios';
import { setGlobal } from 'reactn';

const API_URL = process.env.REACT_APP_API_AUTH_URL;

export const setStorage = ({ userId, role, orgId, orgName, token }) => {
  if (userId) localStorage.setItem('userId', JSON.stringify(userId));
  if (role) localStorage.setItem('role', JSON.stringify(role));
  if (orgId) localStorage.setItem('orgId', JSON.stringify(orgId));
  if (orgName) localStorage.setItem('orgName', JSON.stringify(orgName));
  if (token) localStorage.setItem('token', JSON.stringify(token));
};

export const getStorage = ({ userId, role, orgId, orgName, token }) => {
  if (userId) return JSON.parse(localStorage.getItem('userId'));
  if (role) return JSON.parse(localStorage.getItem('role'));
  if (orgId) return JSON.parse(localStorage.getItem('orgId'));
  if (orgName) return JSON.parse(localStorage.getItem('orgName'));
  if (token) return JSON.parse(localStorage.getItem('token'));
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
    console.log({ registerationResponse: res.data });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const login = async ({ email, password }) => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, { email, password });
    // console.log({ loginResponse: res.data });
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
    setStorage({
      userId: res.data.id,
      role: res.data.role,
      token: res.data.token,
    });
    setGlobal({
      userId: res.data.id,
      role: res.data.rol,
    });

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
