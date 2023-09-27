import React from "react";
import {Link} from "react-router-dom";

function NavLink(props) {
    return (
    <nav className="navbar">
        <Link to="/">
            <p>OVERVIEW</p>
        </Link>
        <Link to="/tutors">
            <p>TUTORS</p>
        </Link>
            <p>CONTACT US</p>
        <p>ABOUT</p>
        {(props.loggedIn === true) ? "" : <button className="navbar--sign-up">SIGN-UP</button>}
    </nav>
    )
}

export default NavLink;