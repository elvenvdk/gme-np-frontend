import React, { useEffect, useState } from 'react';
import { setGlobal } from 'reactn';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import PrivateRoute from './components/auth/privateRoute/PrivateRoute';
import Layout from './components/layout/Layout';
import AuthLayout from './components/auth/layout/Layout';
import api from './api';

const App = () => {
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    setUserId(api.getStorage.userId());
    setGlobal({ userId: api.getStorage.userId() });
  }, [api.getStorage.userId(), setUserId]);

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
            return <Redirect to='/auth/login' />;
          }}
        />
        <Route path='/auth' component={AuthLayout} />
        <PrivateRoute path='/sales' component={Layout} />
      </Switch>
    </div>
  );
};

export default App;
