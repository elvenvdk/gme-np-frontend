import React, { useState, useEffect } from 'react';
import { useGlobal } from 'reactn';

import { addOrg } from '../../api/org';

import './OrgRegistration.scss';

const OrgRegistration = () => {
  const [userId] = useGlobal('userId');
  const [message, setMessage] = useState({
    error: null,
    confirmation: null,
  });
  const [loading, setLoading] = useState(false);
  const [orgData, setOrgData] = useState({
    name: '',
    owner: null,
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    photo: null,
  });

  const {
    name,
    owner,
    addressLine1,
    addressLine2,
    city,
    state,
    zipCode,
    photo,
  } = orgData;

  console.log({ userId });

  useEffect(() => {
    setOrgData({
      ...orgData,
      owner: userId,
    });
  }, []);

  const handleInputChange = (e) => {
    e.preventDefault();
    setOrgData({
      ...orgData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    setOrgData({
      ...orgData,
      [e.target.name]: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await addOrg({
        name,
        owner,
        addressLine1,
        addressLine2,
        city,
        state,
        zipCode,
        photo,
      });
      setMessage({
        ...message,
        confirmation: res.message,
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setMessage({
        ...message,
        error,
      });
    }
  };

  return (
    <div className='org-registration'>
      <form className='org-registration-form' onSubmit={handleSubmit}>
        <label htmlFor='name' className='org-registration-form-label'>
          Name
        </label>
        <input
          type='text'
          className='org-registration-form-input'
          id='name'
          name='name'
          placeholder='Organization Name'
          value={name}
          onChange={(e) => handleInputChange(e)}
        />

        <label htmlFor='addressLine1' className='org-registration-form-label'>
          Address Line 1
        </label>
        <input
          type='text'
          className='org-registration-form-input'
          id='addressLine1'
          name='addressLine1'
          placeholder='Street or PO Box Address'
          value={addressLine1}
          onChange={(e) => handleInputChange(e)}
        />

        <label htmlFor='addressLine2' className='org-registration-form-label'>
          Address Line 2
        </label>
        <input
          type='text'
          className='org-registration-form-input'
          id='addressLine2'
          name='addressLine2'
          placeholder='Street or PO Box Address Part 2'
          value={addressLine2}
          onChange={(e) => handleInputChange(e)}
        />

        <label htmlFor='city' className='org-registration-form-label'>
          City
        </label>
        <input
          type='text'
          className='org-registration-form-input'
          id='city'
          name='city'
          placeholder='City'
          value={city}
          onChange={(e) => handleInputChange(e)}
        />

        <label htmlFor='state' className='org-registration-form-label'>
          State
        </label>
        <input
          type='text'
          className='org-registration-form-input'
          id='state'
          name='state'
          placeholder='State'
          value={state}
          onChange={(e) => handleInputChange(e)}
        />
        <label htmlFor='zipCode' className='org-registration-form-label'>
          Zip Code
        </label>
        <input
          type='text'
          className='org-registration-form-input'
          id='zipCode'
          name='zipCode'
          placeholder='Zip Code'
          value={zipCode}
          onChange={(e) => handleInputChange(e)}
        />
        <label htmlFor='photo' className='org-registration-form-label'>
          Organization Icon or Image
        </label>
        <input
          type='file'
          className='org-registration-form-input'
          id='photo'
          name='photo'
          placeholder='Organization Icon or Image'
          // value={photo}
          onChange={(e) => handleImageChange(e)}
        />

        {photo && <img src={photo} className='org-registration-form-image' />}
      </form>
    </div>
  );
};

export default OrgRegistration;
