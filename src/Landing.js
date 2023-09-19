import React from "react";
import {Outlet} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles/normalize.css"
import "./styles/shared.css";
import "./styles/index.css";

function Landing() {
  return (
    <div className="landing">
      <Header />
      <Footer />
      <Outlet />
    </div>
  );
}

export default Landing;
