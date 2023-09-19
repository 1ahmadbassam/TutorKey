import React from "react";

function Header() {
    return (
        <header>
            <div className="logo">
                <img src="../images/logo.jpg" alt="Logo" />
                <h1>TutorKey</h1>
            </div>
            <nav className="navbar">
                <p>OVERVIEW</p>
                <p>TUTORS</p>
                <p>CONTACT US</p>
                <p>ABOUT</p>
                <button className="navbar--sign-up">SIGN-UP</button>
            </nav>
        </header>
    )
}

export default Header;