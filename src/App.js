// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import BookAppBar from "./components/BookAppBar";
import Home from "./components/Home";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import Dashboard from "./components/dashboard/Dashboard";
import Layout from "./components/dashboard/Layout";

function App() {
  return (
    <BrowserRouter>
      <BookAppBar />
      {/* <Dashboard /> */}
      {/* <Layout /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
