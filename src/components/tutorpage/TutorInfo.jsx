import React from "react";

function getRatingElement(rating) {
    /* Prevent weird bugs from happening in case rating data goes invalid */
    if (rating < 0.0) rating = 0.0;
    else if (rating > 5.0) rating = 5.0;

    const ratingEl = []
    rating = Math.floor(rating);
    while (rating > 0) {
        ratingEl.push(<img alt="Star" src="./images/star-filled.svg"/>)
        rating--;
    }
    for (let i = ratingEl.length; i < 5; i++) {
        ratingEl.push(<img alt="Star" src="./images/star.svg"/>)
    }
    return ratingEl;
}

function getTutorType(type) {
    switch (type) {
        case 0:
            return "Provides in-person tutoring";
        case 1:
            return "Provides online tutoring";
        case 2:
            return "Provides in-person or online tutoring";
        case 3:
            return "Provides other tutoring";
        default:
            return "An error has occurred."
    }
}

function TutorInfo(props) {
    const ratingEl = getRatingElement(props.rating);
    const tutorType = getTutorType(props.type);
    const tutorPic = props.type === 1 ? "laptop.svg" : "interaction.svg";
    const tutorAltPic = props.type === 1 ? "Laptop icon" : "Interaction icon";
    const priceRange = props.priceRange.end ? `Prices from $${props.priceRange.start} to $${props.priceRange.end}` : `Prices starting from $${props.priceRange.start}`;

    return (
        <section className="tutor-page--tutor-info">
            <div className="tutor-page--tutor-info--pfp">
                <img src={`./images/${props.profilePic}`}  alt="Tutor profile pic"/>
            </div>
            <div className="tutor-page--tutor-info--details">
                <h3>{props.name}</h3>
                <div className="tutor-page--tutor-info--stars">
                    {ratingEl}
                </div>
                <ul>
                    <li><img alt="University icon" src="./images/university.svg"/>
                        <p>{props.education}</p></li>
                    <li><img alt="Bordered star icon" src="./images/bordered_star.svg"/>
                        <p>{props.experience}</p></li>
                    <li><img alt="Location icon" src="./images/location.svg"/>
                        <p>{props.location}</p></li>
                    <li><img alt={tutorAltPic} src={`./images/${tutorPic}`}/>
                        <p>{tutorType}</p></li>
                    <li><img alt="Calendar icon" src="./images/calendar.svg"/>
                        {/* Trick: table span to de-elevate anchor element */}
                        <span className="table"><a href={props.calendar} target="_blank" rel="noreferrer">Calendar</a></span></li>
                    <li><img alt="Dollar icon" src="./images/dollar.svg"/>
                        <p>{priceRange}</p></li>
                </ul>
            </div>
            <aside className="tutor-page--tutor-info--contact">
                <a href={`https://wa.me/${props.phoneNumber}`} target="_blank" rel="noreferrer" className="tutor-page--tutor-info--message-button-link"><button className="tutor-page--tutor-info--message-button"><img alt="Chat Icon" src="./images/chat.svg"/><span>Message</span>
                </button></a>
                <div className="social-icons tutor-page--tutor-info--social-icons">
                    <a href={`https://facebook.com/${props.facebook}`} target="_blank" rel="noreferrer">
                        <img alt="Facebook" src="./images/facebook.svg"/>
                    </a>
                    <a href={`https://twitter.com/${props.twitter}`} target="_blank" rel="noreferrer">
                        <img alt="Twitter" src="./images/twitter.svg"/>
                    </a>
                    <a href={`https://instagram.com/${props.instagram}`} target="_blank" rel="noreferrer">
                        <img alt="Instagram" src="./images/instagram.svg"/>
                    </a>
                    <a href={`https://linkedin.com/${props.linkedIn}`} target="_blank" rel="noreferrer">
                        <img alt="LinkedIn" src="./images/linkedin.svg"/>
                    </a>
                </div>
            </aside>
        </section>
    )
}

export default TutorInfo;