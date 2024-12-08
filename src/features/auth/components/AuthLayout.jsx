import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const AuthLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
