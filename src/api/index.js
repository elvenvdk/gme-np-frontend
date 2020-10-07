import axios from 'axios';

import auth from './auth';
import org from './org';
import goals from './goals';
import sales from './sales';

import { getStorage } from './auth';

// Attach token to every request
axios.interceptors.request.use(
  (config) => {
    const token = getStorage.token();
    config.headers.common['x-auth-token'] = token;
    return config;
  },
  (error) => Promise.reject(error),
);

const api = {
  ...auth,
  ...org,
  ...goals,
  ...sales,
};

export default api;
