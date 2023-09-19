import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./Landing";
import TutorPage from "./TutorPage";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />}/>
                <Route path="/tutor-info" element={<TutorPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;