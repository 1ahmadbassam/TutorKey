import React from "react";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <h1 className="logo--title no-margin">TutorKey</h1>
            <nav className="navbar no-margin">
                <Link to="/">
                    <p>OVERVIEW</p>
                </Link>
                <p>TUTORS</p>
                <p>CONTACT US</p>
                <p>ABOUT</p>
                <button className="navbar--sign-up">SIGN-UP</button>
            </nav>
            <div className="social-icons center">
                {
                    //TODO: Actually replace these with our website's social media
                }
                <a href={`https://facebook.com/@tutorkey`} target="_blank" rel="noreferrer">
                    <img alt="Facebook" src="./images/facebook-white.svg"/>
                </a>
                <a href={`https://twitter.com/@tutorkey`} target="_blank" rel="noreferrer">
                    <img alt="Twitter" src="./images/twitter-white.svg"/>
                </a>
                <a href={`https://instagram.com/@tutorkey`} target="_blank" rel="noreferrer">
                    <img alt="Instagram" src="./images/instagram-white.svg"/>
                </a>
                <a href={`https://linkedin.com/@tutorkey`} target="_blank" rel="noreferrer">
                    <img alt="LinkedIn" src="./images/linkedin-white.svg"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;