import React from 'react';
import { getGlobal, useGlobal } from 'reactn';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import Register from '../register/Register';
import Login from '../login/Login';
import EmailVerificationCheck from '../emailVerificationCheck/EmailVerificationCheck';
import api from '../../../api';

import './Layout.scss';

const Layout = () => {
  const { userId } = getGlobal();
  const { orgId } = getGlobal();
  const location = useLocation();

  if (userId) {
    return (
      <Redirect
        to={
          location.state?.from?.pathName + location.state?.from?.search ||
          '/sales/goals'
        }
      />
    );
  }

  if (orgId) {
    return (
      <Redirect
        to={
          location.state?.from?.pathName + location.state?.from?.search ||
          '/sales/goals'
        }
      />
    );
  }

  console.log(location.state?.from?.pathName + location.state?.from?.search);

  return (
    <div className='auth-layout'>
      <Switch>
        <Route path='/auth/registration' exact component={Register} />
        <Route path='/auth/login' exact component={Login} />
        <Route
          path='/auth/registration-email-verification/:token'
          exact
          component={EmailVerificationCheck}
        />
      </Switch>
    </div>
  );
};

export default Layout;
