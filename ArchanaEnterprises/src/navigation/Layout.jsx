import React from "react";
import Navbar from "../navigation/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
