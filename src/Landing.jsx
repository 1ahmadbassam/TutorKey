import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Landing() {
  return (
    <div className="page landing">
      <Header />
      <Footer />
      <Outlet />
    </div>
  );
}

export default Landing;
