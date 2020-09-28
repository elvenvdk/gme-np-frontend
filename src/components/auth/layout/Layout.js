import React from 'react';
import { getGlobal, useGlobal } from 'reactn';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import Register from '../register/Register';
import Login from '../login/Login';
import EmailVerificationCheck from '../emailVerificationCheck/EmailVerificationCheck';

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

  return (
    <div className='auth-layout'>
      <Switch>
        <Route path='/user/login' exact component={Login} />
        <Route path='/user/registration' exact component={Register} />
        <Route
          path='/registration-email-verification/:token'
          exact
          component={EmailVerificationCheck}
        />
      </Switch>
    </div>
  );
};

export default Layout;
