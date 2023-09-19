import React from "react";
import {Outlet} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import TutorInfo from "./components/tutorpage/TutorInfo";

import "./styles/normalize.css"
import "./styles/shared.css";
import "./styles/tutor-page.css";

function TutorPage() {
    const sampleData = {
        /*
            Profile picture of tutor.
            Currently, an absolute image in sample data; however, these will be
            "fetched" from Firebase later on.
         */
        profilePic: "placeholder.png",
        /*
            Tutor name as in profile record.
         */
        name: "Tutor's name",
        /*
            A float from 0.0 to 5.0
         */
        rating: 5.0,
        /*
            User-friendly experience string, determined by Tutor him/herself.
         */
        experience: "Experience",
        /*
            User-friendly location string.
            Real location (i.e. realLocation) need not be passed
            to this component at this time.
         */
        location: "Location",
        /*
            Types of tutoring:
                0: in-person only
                1: online only
                2: in-person + online
                3: other
                ELSE: invalid
            Text and icon are appropriately rendered to display the given info.
        */
        type: 2,
        /*
            TODO: Replace with actual calendar implementation.
            Tutor-specific link to .ics calendar or Google calendar.
         */
        calendar: "https://google.com/",
        /*
            Price range for tutor. If both bounds are available then both
            are displayed. Else, the starting price is appropriately rendered.
         */
        priceRange: {
            start: 10.0,
            end: 35.0
        },
        /*
            Phone number in international format (omit any zeroes, brackets, or dashes).
            Generated WA link is in the form https://wa.me/{phoneNumber}
         */
        phoneNumber: "+9613000000",
        /*
            Social media handles are of the form @{social media handle}.
            Appropriate links are generated for each platform.
         */
        facebook: "@tutor",
        instagram: "@tutor",
        twitter: "@tutor",
        linkedIn: "@tutor"
    };

    return (
        <div className="tutorPage">
            <Header/>
            <TutorInfo {...sampleData} />
            <Footer/>
            <Outlet/>
        </div>

    )
}

export default TutorPage;
