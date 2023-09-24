import React from "react";

function FirstPage(){
    return(
        <div>
            <div id="Second-Header">
                <div id="Text-Div">
                    <p id="Text">Find your preferred highly trained and empathetic tutor!</p>
                </div>
                <div id="Books-Div">
                    <img id="Books" src="images/Books.png" alt="Books"/>
                </div>
                <div id="Diagram-Div">
                    <img id="Diagram" src="images/diagram.png" alt="Diagram"/>
                </div>
            </div>
            <div id="Features">
                <div id="col1">
                    <div class="Box">
                        <img src="images/Rating.png" class="img1" alt="Rating"/>
                        <h1>Reviews</h1>
                        <h2>TutorKey gives you the chance to benefit from previous students' reviews about the tutor you are looking for. </h2>
                    </div>
                    <div class="Box">
                        <img src="images/Location.png" class="img4"/>
                        <h1>Locations</h1>
                        <h2>TutorKey provides tutors' locations. You are able to find tutors near you, tutors in your area and online tutors. </h2>
                    </div>
                    <div class="Box">
                        <img src="images/Contact.png" class="img3" alt="Rating"/>
                        <h1>Contact your tutor</h1>
                        <h2>Reach out to your mentor online by messaging, video calling and voice calling them using Tutorkey.</h2>
                    </div>
                </div>
                <div id="col2">
                    <div class="Box">
                        <img src="images/Payment.png" class="img5" alt="Rating"/>
                        <h1>Affordable Rates</h1>
                        <h2>Find the tutor that suits your budget the most. Rates are usually dependent on the tutor's experiences and start at 5$/hour. </h2>
                    </div>
                    <div class="Box">
                        <img src="images/Time.png" class="img2" alt="Rating"/>
                        <h1>Time Schedule</h1>
                        <h2>TutorKey provides tutors' schedules so that you can find suitable hours for your meetings.</h2>
                    </div>
                    <div class="Box">
                        <img src="images/special-needs.png" class="img6" alt="Rating"/>
                        <h1>Tutors for special needs student</h1>
                        <h2>Special needs students are the most welcome to our website! Find tutors that will be more than happy to help you imoprove your academic skills.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstPage;



