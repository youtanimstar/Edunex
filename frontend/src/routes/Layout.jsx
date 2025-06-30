import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { ReactLenis, useLenis } from "lenis/react";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <ReactLenis root />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
