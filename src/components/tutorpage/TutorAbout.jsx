import React from "react";

function TutorAbout(props) {
    return (
        <section className="tutor-page--tutor-about">
            <h1 className="tutor-page--section-header">About</h1>
            <p>{props.about}</p>
        </section>
    )
}

export default TutorAbout;