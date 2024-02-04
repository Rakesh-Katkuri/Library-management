// PrivateRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element, isAuthenticated, role }) => {
  return (
    <Route
      element={
        isAuthenticated && role === "user" ? (
          <Element />
        ) : isAuthenticated && role === "admin" ? (
          <Element />
        ) : (
          <Navigate to="/sign-in" />
        )
      }
    />
  );
};

export default PrivateRoute;
