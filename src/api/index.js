import {
  emailVerificationCheck,
  register,
  login,
  logout,
  forgotPassword,
  forgotPasswordVerification,
} from './auth';

import { addOrg, updateOrg } from './org';

const api = {
  ...emailVerificationCheck,
  ...register,
  ...login,
  ...logout,
  ...forgotPassword,
  ...forgotPasswordVerification,
  ...addOrg,
  ...updateOrg,
};

export default api;
