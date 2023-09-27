import React from "react";
import NavLink from "./NavLink";

function Footer() {
    return (
        <footer className="footer">
            <h1 className="logo--title no-margin">TutorKey</h1>
            <NavLink />
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