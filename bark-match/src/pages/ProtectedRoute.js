// ProtectedRoute.js
import React from 'react';
import { Route, NavLink } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <NavLink to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
