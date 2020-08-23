import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Register from './components/auth/register/Register';
import Login from './components/auth/login/Login';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={Layout} />
      </Switch>
    </div>
  );
}

export default App;
