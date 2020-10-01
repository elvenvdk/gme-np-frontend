import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../common/nav/Nav';
import Goals from '../goals/Goals';
import GoalSettings from '../goalSettings/GoalSettings';
import OrgRegistration from '../orgRegistration/OrgRegistration';
import UserManagement from '../auth/userManagement/UserManagement';
import api from '../../api';
import './Layout.scss';

const Layout = () => {
  const [orgId, setOrgId] = useState(null);

  useEffect(() => {
    setOrgId(api.getStorage.orgId());
  }, [api.getStorage.orgId(), setOrgId]);

  return (
    <div>
      <Nav />
      <Switch>
        <Route path='/sales/goals' exact component={Goals} />
        <Route path='/sales/goal-settings' exact component={GoalSettings} />
        <Route
          path='/sales/organization-registration'
          exact
          compon
          ent={OrgRegistration}
        />
        <Route path='/sales/user-management' exact component={UserManagement} />
      </Switch>
    </div>
  );
};

export default Layout;
