// Body.js
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Profile from "./Profile";
import Feed from "./Feed"
const Body = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Feed />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
