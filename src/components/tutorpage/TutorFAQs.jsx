import React, { useState } from "react";

function FAQItem(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="tutor-page--tutor-faq--questions-dropdown">
      <button className="tutor-page--tutor-faq--questions-button" onClick={toggleOpen}>
        <div>
          <span>{props.question}</span>
          <img src="./images/expand.svg" alt="Show more" />
        </div>
      </button>
      <div className="tutor-page--tutor-faq--questions-dropdown-content" style={{ display: isOpen ? "block" : "none" }}>
        <p>{props.answer}</p>
      </div>
    </div>
  );
}

function TutorFAQs(props) {
  const faqItems = props.faq.map((el, i) => <FAQItem key={i} keyVal={i} question={el.question} answer={el.answer} />);
  return (
      <section className="tutor-page--tutor-faq">
        <h1 className="tutor-page--section-header">FAQs</h1>
        <aside className="tutor-page--tutor-faq--questions">
          {faqItems}
        </aside>
        <aside className="tutor-page--tutor-faq--add-question-box">
        <p className="tutor-page--tutor-faq--add-question-subheader">Ask this tutor a question:</p>
          <input type="text" placeholder="Do you offer assignments for students?" />
          <button type="submit">Submit</button>
        </aside>
      </section>
  );
}

export default TutorFAQs;
