import React, { useState } from "react";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="DropDown">
      <button className="FAQ_Questions" onClick={toggleOpen}>
        {question}
        <i
          className="fa-solid fa-angle-down"
          style={{color:"#ffffff" }}
          id="Down_Arrows_in_FAQs"
        ></i>
      </button>
      <div className="Dropdown-Content" style={{ display: isOpen ? "block" : "none" }}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

function TutorFAQs({ faqItems }) {
  return (
    <div className="tutor-page--tutor-FAQs">
      <div className="Tutor_FAQ_Section">
        <h1 className="FAQ_Title">FAQs</h1>
        <div className="FAQs_questions_div">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>

        <p className="Add_Your_Question_Text">Add your question:</p>

        <div className="Adding_Question_With_Submit">
          <input type="text" className="Adding_Question_FAQs" placeholder="Add your question..." />
          <button type="submit" className="Submit_Button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default TutorFAQs;
