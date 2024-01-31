// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import BookAppBar from "./components/BookAppBar";
import Home from "./components/Home";
// import AdminDashboard from './components/AdminDashboard';
// import UserDashboard from './components/UserDashboard';
// import BookDetails from './components/BookDetails';
// import Logout from './components/Logout';
// import Register from './components/Register';
// import MediaQueryExample from './components/MediaQueryExample';

function App() {
  return (
    <BrowserRouter>
      <BookAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* <Route path="/admin" component={AdminDashboard} />
        <Route path="/user" component={UserDashboard} />
        <Route path="/book/:id" component={BookDetails} /> 
        <Route path="/media-query" component={MediaQueryExample} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
