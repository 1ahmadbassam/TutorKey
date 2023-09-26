import React from "react";

const FeatureArr = [
  {
    img: "star-filled-yellow.svg",
    alt: "Star Icon",
    name: "Reviews",
    description: "TutorKey gives you the chance to benefit from previous students' reviews about the tutor you are looking for."
  },
  {
    img: "location-filled.svg",
    alt: "Location Icon",
    name: "Locations",
    description: "TutorKey provides tutors' locations. You are able to find tutors near you, tutors in your area and online tutors."
  },
  {
    img: "money.svg",
    alt: "Money Icon",
    name: "Affordable Rates",
    description: "TutorKey's tutors are spread over a wide range of budgets. Rates are usually dependent on the tutor's experiences and start at 5$/hour."
  },
  {
    img: "calendar-filled.svg",
    alt: "Calendar Icon",
    name: "Time Schedule",
    description: "TutorKey provides tutors' schedules so that you can find suitable hours for your meetings."
  },
  {
    img: "handicap.svg",
    alt: "Handicap Icon",
    name: "Special Needs",
    description: "TutorKey fully supports students with special needs! Find tutors that will be more than happy to help you achieve academic success."
  },
  {
    img: "handicap.svg",
    alt: "Handicap Icon",
    name: "Special Needs",
    description: "TutorKey fully supports students with special needs! Find tutors that will be more than happy to help you achieve academic success."
  }
]

function FeatureItem(props) {
  const img = `./images/${props.img}`;
  return (
    <aside className="landing--features--feature">
        <img src={img} alt={props.alt} />
        <h2>{props.name}</h2>
        <h3>
          {props.description}
        </h3>
    </aside>
  )
}

function Features() {
  const features = FeatureArr.map((el, i) => <FeatureItem {...el} key={i} />)
  return (
    <div className="landing--features final">
      <div className="landing--features--layout">
        {features}
      </div>
    </div>
  );
}

export default Features;
