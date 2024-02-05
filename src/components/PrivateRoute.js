// PrivateRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element, isAuthenticated, role }) => {
  if (isAuthenticated && (role === "user" || role === "admin")) {
    return <Route element={<Element />} />;
  }

  // Redirect to sign-in if not authenticated or role does not match
  return <Navigate to="/sign-in" replace />;
};

export default PrivateRoute;
