import React from 'react';
import { useGlobal } from 'reactn';
import { Route, Redirect } from 'react-router-dom';

const OwnerRoute = ({ component: Component, ...rest }) => {
  const [userId] = useGlobal('userId');
  return (
    <Route
      {...rest}
      render={(props) =>
        userId ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/auth/signin', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default OwnerRoute;
