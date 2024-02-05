// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import BookAppBar from "./components/BookAppBar";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import { Provider } from "react-redux";
import store from "./app/store";
import { QueryClient, QueryClientProvider } from "react-query";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const queryClient = new QueryClient();
  const isAuthenticated = !!localStorage.getItem("userId"); // Check if user is authenticated
  const role = localStorage.getItem("role");
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <BookAppBar />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/user-dashboard"
            element={
              <PrivateRoute>
                <UserDashboard />
              </PrivateRoute>
            }
            isAuthenticated={isAuthenticated}
            role={role}
          />
          <Route
            path="/admin-dashboard"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
            isAuthenticated={isAuthenticated}
            role={role}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
