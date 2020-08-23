import axios from 'axios';

const API_AUTH_URL = process.env.REACT_APP_API_AUTH_URL;

export const register = async (inputData) => {
  try {
    const res = await axios.post(`${API_AUTH_URL}/register`, inputData);
    console.log(res);
    return res;
  } catch (error) {
    return error.response.data;
  }
};

export const login = async (inputData) => {
  try {
    const res = await axios.post(`${API_AUTH_URL}/login`, inputData);
    console.log(res);
  } catch (error) {
    return error.response.data;
  }
};

export default { register };
