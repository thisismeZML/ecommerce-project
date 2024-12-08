import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const PublicLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <Sidebar/>
    </div>
  );
};

export default PublicLayout;
