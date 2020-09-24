import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { emailVerificationCheck } from '../../../api/auth';

const EmailVerificationCheck = ({ match }) => {
  const [message, setMessage] = useState({
    error: null,
    confirmation: null,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    verifyEmail();
  }, []);

  const verifyEmail = async () => {
    setLoading(true);
    const res = await emailVerificationCheck(match.params.token);

    if (res?.error) {
      setMessage({
        ...message,
        error: res.error,
      });
      setLoading(false);
      return;
    }
    setMessage({
      ...message,
      confirmation: res.msg,
    });
    setLoading(false);
  };

  return (
    <div>
      {message.confirmation && <p>{message.confirmation}</p>}
      {message.error && <p>{message.error}</p>}
      {message.confirmation && <Redirect to='/sales/goals' />}
    </div>
  );
};

export default EmailVerificationCheck;
