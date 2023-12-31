import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="logo">
                <img src="./images/logo.jpg" alt="Logo" />
                <h1 className="logo--title">TutorKey</h1>
            </div>
            <nav className="navbar">
                <Link to="/">
                <p>OVERVIEW</p>
                </Link>
                <p>TUTORS</p>
                <p>CONTACT US</p>
                <p>ABOUT</p>
                <button className="navbar--sign-up">SIGN-UP</button>
            </nav>
        </header>
    )
}

export default Header;