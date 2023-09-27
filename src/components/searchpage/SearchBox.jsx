import React from "react";
import {useNavigate} from "react-router";

function SearchBox() {
    const navigate = useNavigate();

    return (
        <section className="search-page--search-box">
            <aside className="search-page--search-box--header">
                <img src="./images/key.png" alt="Key Icon" />
                <h1>Find your desired tutor!</h1>
            </aside>
            <aside className="search-page--search-box--box">
                <img src="./images/search.svg" alt="Search Icon" />
                <input type="text" placeholder="AP Calculus tutor.." onKeyDown={
                    (ev) => {
                        if (ev.key === "Enter") console.log("Enter pressed");
                    }
                }/>
            </aside>
        </section>
    )
}

export default SearchBox;