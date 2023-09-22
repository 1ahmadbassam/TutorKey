import React from "react";
import Card from "../Card";

function arrayToCards(arr) {
    return arr.map((el, i) => <Card key={i} {...el} />)
}

function TutorSubsets(props) {
    const servicesOffered = arrayToCards(props.servicesOffered);
    const languages = arrayToCards(props.languages);

    return (
        <div className="tutor-page--tutor-subsets-shade">
            <section className="tutor-page--tutor-subsets">
                <h1 className="tutor-page--section-header">Services Offered</h1>
                <div className="tutor-page--tutor-subsets-top">
                    {servicesOffered}
                </div>
            </section>
            <section className="tutor-page--tutor-subsets">
                <h1 className="tutor-page--section-header">Languages</h1>
                <div className="tutor-page--tutor-subsets-top">
                    {languages}
                </div>
            </section>
        </div>
    )
}

export default TutorSubsets;