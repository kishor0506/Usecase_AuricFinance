import React from "react";
import { Route, Redirect } from "react-router-dom";
export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
    
  const signed = sessionStorage.getItem('sign');
  if (isPrivate && !signed) {
    return <Redirect to="/home" />;
  }

  if (!isPrivate && signed) {
    return <Redirect to='/'/>;
  }
  
  return <Route {...rest} component={Component}/>
}

