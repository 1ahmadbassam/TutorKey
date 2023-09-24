import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FirstPage from "./components/FirstPage";

function Landing() {
  return (
    <div className="page landing">
      <Header />
      <FirstPage />
      <Footer />
      <Outlet />
    </div>
  );
}

export default Landing;
