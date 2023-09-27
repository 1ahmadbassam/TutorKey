import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import TutorPage from "./TutorPage";
import SearchPage from "./SearchPage";

import "./styles/normalize.css";
import "./styles/shared.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tutors" element={<SearchPage />} />
        <Route path="/tutor-info" element={<TutorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
