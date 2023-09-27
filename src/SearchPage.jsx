import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import SearchCards from "./components/searchpage/SearchCards";

import "./styles/search-page.css";
import SearchBox from "./components/searchpage/SearchBox";

function SearchPage() {
  return (
    <div className="page search-page">
      <Header />
      <SearchBox />
      <SearchCards />
      <Footer />
      <Outlet />
    </div>
  );
}

export default SearchPage;
