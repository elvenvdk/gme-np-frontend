import axios from 'axios';

const API_AUTH_URL = process.env.REACT_APP_API_AUTH_URL;

export const register = async (inputData) => {
  try {
    const response = await axios.post(`${API_AUTH_URL}/register`, inputData);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default { register };
