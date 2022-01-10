import React from "react";
import "../styles/style.css";
import self from "../images/jordan.jpeg";

function About() {
  return (
    <section className="about-me">
      <div className="self-image">
        <img src={self} alt="Jordan DuBose" />
      </div>
      <div className="about-me-text">
        <p className="welcome">
          Welcome! <br />
        </p>
        <p className="about-body">
          My name is Jordan DuBose and I am an Implementation Specialist at a
          Wilmington financial technology company,
          <a href="https://apiture.com/" target="blank">
            Apiture
          </a>
          , and have been for almost 3 years. I am currently attending the
          Coding Bootcamp at the University of North Carolina at Chapel Hill to
          become a Full Stack Web Developer by January 2022. I also have a
          Bachelor’s Degree focused in Business Administration, Economics
          Concentration from the University of North Carolina at Wilmington in
          May of 2019 with
          <em>cum laude</em> honors. Skilled in Project Management, Browser
          Based Technologies, Databases, Server Side Development, and API
          Interaction. <br />
          <br />
          <b> Full Stack Web Development: </b>
          <ul className="about-dev-list">
            <li className="about-dev-list">
              HTML, CSS, JavaScript, jQuery, Responsive Design, Bootstrap,
              Handlebars, React.js
            </li>
            <li className="about-dev-list">API, JSON, AJAX</li>
            <li className="about-dev-list">
              Node.js, Express, User Authentication, Progressive Web
              Applications, MERN Stack
            </li>
            <li className="about-dev-list">MySQL, MongoDB</li>
            <li className="about-dev-list">
              Unit Testing, Functional Testing, Linting, Continuous Integration
            </li>
            <li className="about-dev-list">Heroku, Git, GitHub</li>
          </ul>
        </p>
      </div>
    </section>
  );
}

export default About;
