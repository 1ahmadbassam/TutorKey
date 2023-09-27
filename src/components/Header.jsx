import React from "react";
import NavLink from "./NavLink";

function Header() {
    return (
        <header>
            <div className="logo">
                <img src="./images/logo.jpg" alt="Logo" />
                <h1 className="logo--title">TutorKey</h1>
            </div>
            <NavLink loggedIn="false" />
        </header>
    )
}

export default Header;