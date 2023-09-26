import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./components/landing/Hero";
import Features from "./components/landing/Features";

import "./styles/landing.css";

function Landing() {
  return (
    <div className="page landing">
      <Header />
      <Hero />
      <Features />
      <Footer />
      <Outlet />
    </div>
  );
}

export default Landing;
