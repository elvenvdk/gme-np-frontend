import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from '../common/nav/Nav';
import Register from '../auth/register/Register';

import './Layout.scss';

export default function Layout() {
  return (
    <div>
      <Nav />
      <Register />
    </div>
  );
}
