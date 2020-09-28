import React from 'react';
import { getGlobal } from 'reactn';
import { Redirect, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/auth/privateRoute/PrivateRoute';
import Layout from './components/layout/Layout';
import AuthLayout from './components/auth/layout/Layout';

const App = () => {
  const { userId } = getGlobal();

  if (userId) {
  }
  return (
    <div className='App'>
      <Switch>
        <Route
          path='/'
          exact
          component={() => {
            if (userId) {
              return <Redirect to='/sales/goals' />;
            }
            return <Redirect to='/user/login' />;
          }}
        />
        <Route path='/user/login' component={AuthLayout} />
        <PrivateRoute path='/sales' component={Layout} />
      </Switch>
    </div>
  );
};

export default App;
