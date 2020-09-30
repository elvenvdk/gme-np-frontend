import auth from './auth';
import org from './org';
import sales from './sales';

const api = {
  ...auth,
  ...org,
  ...sales,
};

export default api;
