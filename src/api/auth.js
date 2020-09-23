import axios from 'axios';

const API_URL = process.env.REACT_APP_API_AUTH_URL;

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
    console.log({ loginResponse: res.data });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const emailVerificationCheck = async ({ token }) => {
  try {
    const res = await axios.post(`${API_URL}/auth/email-verification`, {
      token,
    });
    console.log({ emailVerificationCheck_Response: res.data });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const forgotPassword = async ({ email }) => {
  try {
    const res = await axios.post(`${API_URL}/forgot-password-verification`, {
      email,
    });
    console.log({ forgotPassword_Response: res.data });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
