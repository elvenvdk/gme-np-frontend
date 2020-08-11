import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={Layout} />
      </Switch>
    </div>
  );
}

export default App;
