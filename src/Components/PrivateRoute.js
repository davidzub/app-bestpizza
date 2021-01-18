import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const validateUser = useSelector((state) => state.validateLogin);
  return (
    <Route
      {...rest}
      render={(props) =>
        validateUser ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
export default PrivateRoute;
