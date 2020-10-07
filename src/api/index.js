import auth from './auth';
import org from './org';
import goals from './goals';
import sales from './sales';

const api = {
  ...auth,
  ...org,
  ...goals,
  ...sales,
};

export default api;
