import axios from 'axios';
import { setGlobal } from 'reactn';

import { setStorage, getStorage } from './auth';

const API_URL = process.env.REACT_APP_API_AUTH_URL;

export const addOrg = async (orgForm) => {
  try {
    const res = await axios.post(
      `${API_URL}/org/add?userId=${getStorage.userId()}`,
      orgForm,
    );
    setStorage({ orgId: res.data.orgId, orgToken: res.data.orgToken });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateOrg = async ({
  name,
  addressLine1,
  addressLine2,
  city,
  state,
  zipCode,
  photo,
  active,
}) => {
  try {
    const res = await axios.put(`${API_URL}/api/org/update`, {
      name,
      addressLine1,
      addressLine2,
      city,
      state,
      zipCode,
      photo,
      active,
    });

    return res.data;
  } catch (error) {
    return error.data.response;
  }
};

export default {
  addOrg,
  updateOrg,
};
