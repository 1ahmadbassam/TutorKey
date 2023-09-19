import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/shared.css";
import "./styles/index.css"

function Landing() {
  return (
    <div className="app">
      <Header />
      <Footer />
    </div>
  );
}

export default Landing;
