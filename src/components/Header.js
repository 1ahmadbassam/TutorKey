import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="logo">
                <img src="./images/logo.jpg" alt="Logo" />
                <h1>TutorKey</h1>
            </div>
            <nav className="navbar">
                <Link to="/">
                <p>OVERVIEW</p>
                </Link>
                {
                    /*
                        TODO: Replace with proper link to the tutors search page.
                         For now, we use the following as a handle to our work area.
                     */
                }
                <Link to="/tutor-info">
                <p>TUTORS</p>
                </Link>
                <p>CONTACT US</p>
                <p>ABOUT</p>
                <button className="navbar--sign-up">SIGN-UP</button>
            </nav>
        </header>
    )
}

export default Header;