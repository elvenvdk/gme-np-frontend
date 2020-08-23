import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from '../common/nav/Nav';
import Register from '../auth/register/Register';
import Login from '../auth/login/Login';
import Goals from '../goals/Goals';

import './Layout.scss';

export default function Layout() {
  return (
    <div>
      <Nav />
      <Switch>
        {/* <Route path='/' exact component={Login} /> */}
        <Route path='/user/login' exact component={Login} />
        <Route path='/user/registration' exact component={Register} />
        <Route path='/sales/goals' exact component={Goals} />
      </Switch>
    </div>
  );
}
