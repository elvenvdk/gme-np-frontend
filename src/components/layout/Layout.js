import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from '../common/nav/Nav';
import Register from '../auth/register/Register';
import Login from '../auth/login/Login';
import Goals from '../goals/Goals';
import GoalSettings from '../goalSettings/GoalSettings';
import EmailVerificationCheck from '../auth/emailVerificationCheck/EmailVerificationCheck';
import OrgRegistration from '../orgRegistration/OrgRegistration';

import './Layout.scss';

const Layout = () => {
  return (
    <div>
      <Nav />
      <Switch>
        {/* <Route path='/' exact component={Login} /> */}
        <Route path='/user/login' exact component={Login} />
        <Route path='/user/registration' exact component={Register} />
        <Route path='/sales/goals' exact component={Goals} />
        <Route path='/sales/goals/settings' exact component={GoalSettings} />
        <Route
          path='/registration-email-verification/:token'
          exact
          component={EmailVerificationCheck}
        />
        <Route path='/org/registration' exact component={OrgRegistration} />
      </Switch>
    </div>
  );
};

export default Layout;
