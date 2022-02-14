import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
// import { Context } from "contexts/AppContext";

export const ProtectedRoute = ({ component: Component, secure, fallback = "/login", ...rest }) => {
  const { AppState } = useContext(AppContext);
  const { token, user } = AppState;
  // if (secure && !token) return <Redirect to={fallback} />;
  return <Route {...rest} render={props => <Component {...props} />} />;
};
