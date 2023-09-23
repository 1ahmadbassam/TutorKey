import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles/tutor-page.css";

import TutorInfo from "./components/tutorpage/TutorInfo";
import TutorAbout from "./components/tutorpage/TutorAbout";
import TutorReview from "./components/tutorpage/TutorReview";
import TutorSubsets from "./components/tutorpage/TutorSubsets";
import TutorFAQs from "./components/tutorpage/TutorFAQs";

function generateGibberish() {
  let str = "Lorem "
  for (let i = 0; i < 5; i++) {
    str+=str;
  }
  return str;
}

export function getRatingElement(rating) {
  /* Prevent weird bugs from happening in case rating data goes invalid */
  if (rating < 0.0) rating = 0.0;
  else if (rating > 5.0) rating = 5.0;

  const ratingEl = []
  let j = 0;
  rating = Math.floor(rating);
  while (rating > 0) {
    ratingEl.push(<img key={j} alt="Star" src="./images/star-filled.svg"/>)
    rating--;
    j++;
  }
  for (let i = ratingEl.length; i < 5; i++) {
    ratingEl.push(<img key={j} alt="Star" src="./images/star.svg"/>)
    j++;
  }
  return ratingEl;
}

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
            Review section for tutor
         */
    review: {
      /*
            Average rating, computed from individual ratings.
       */
      rating: 3.44,
      /*
            Detailed review numbers for said tutor.
       */
      totalReviews: 1020,
      countOneReviews: 27,
      countTwoReviews: 122,
      countThreeReviews: 345,
      countFourReviews: 432,
      countFiveReviews: 94,
      /*
            Top (highest rated and most critical) reviews.
       */
      topRating: {
        profilePic: "placeholder.png",
        name: "Student X",
        message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Alias culpa dolorum mollitia odit possimus quis quo tempore vel! 
        Beatae deserunt distinctio impedit iusto non odit quisquam sapiente tempore ut voluptate.`
      },
      mostCriticalRating: {
        profilePic: "placeholder.png",
        name: "Student Y",
        message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Alias culpa dolorum mollitia odit possimus quis quo tempore vel! 
        Beatae deserunt distinctio impedit iusto non odit quisquam sapiente tempore ut voluptate.`
      },
    },
    /*
            Educational level of tutor, for example a high school diploma
            or a bachelor's degree.
     */
    education: "Education",
    /*
            Experience level of tutor in tutoring said subject.
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
      end: 35.0,
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
    linkedIn: "@tutor",
    /*
            About section for tutor. The about section is designed to handle small
            and large about sections.
     */
    about: "",
    /*
            Services offered by the tutor and special needs.
            An array of (Card) of objects which consist of:
              - img: An image on the card.
              - alt: An alt text to be displayed if the image is not available.
              - text: The text shown on the card.
     */
    servicesOffered: [
      {
        img: "autism.jpg",
        alt: "Autism",
        text: "Autism and ADHD"
      },
      {
        img: "autism.jpg",
        alt: "Autism",
        text: "Autism and ADHD"
      },
      {
        img: "autism.jpg",
        alt: "Autism",
        text: "Autism and ADHD"
      },
      {
        img: "autism.jpg",
        alt: "Autism",
        text: "Autism and ADHD"
      }
    ],
    /*
            Languages for the tutor.
            An array of (Card) of objects which consist of:
              - img: An image on the card.
              - alt: An alt text to be displayed if the image is not available.
              - text: The text shown on the card.
     */
    languages: [
      {
        img: "english.jpg",
        alt: "English",
        text: "English"
      },
      {
        img: "english.jpg",
        alt: "English",
        text: "English"
      },
      {
        img: "english.jpg",
        alt: "English",
        text: "English"
      },
    ]
  };

  sampleData.about = generateGibberish();
  
  const faqItems = [
    {
      question: "Question1",
      answer: "Answer to Question1",
    },
    {
      question: "Question2",
      answer: "Answer to Question2",
    },
    {
      question: "Question3",
      answer: "Answer to Question3",
    },
    {
      question: "Question4",
      answer: "Answer to Question4",
    },
    {
      question: "Question5",
      answer: "Answer to Question5",
    },
  ];
  return (
    <div className="page tutorPage">
      <Header />
      <TutorInfo {...sampleData} />
      <TutorAbout about={sampleData.about} />
      <TutorReview review={sampleData.review} />
      <TutorFAQs faqItems={faqItems} />
      <TutorSubsets servicesOffered={sampleData.servicesOffered} languages={sampleData.languages} />
      <Footer />
      <Outlet />
    </div>
  );
}

export default TutorPage;
