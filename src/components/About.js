import React from "react";
import "../styles/style.css";
import self from "../images/jordan.jpeg";
import badge from "../images/badge.png";

function About() {
  return (
    <section className="about-me" data-aos="fade-up">
      <div className="self-image">
        <img src={self} alt="Jordan DuBose" />
      </div>
      <div className="about-me-text">
        <p className="welcome">
          Welcome! <br />
        </p>
        <p className="about-body">
          My name is Jordan DuBose and I am an Implementation Specialist at a
          Wilmington financial technology company, {" "}
          <a href="https://apiture.com/" target="blank">
           Apiture 
          </a>
          , and have been for almost 3 years. I just completed the certification
          to become a Full Stack Web Developer from the University of North
          Carolina at Chapel Hill to in January 2022. I also have a Bachelor’s
          Degree focused in Business Administration, Economics Concentration
          from the University of North Carolina at Wilmington in May of 2019
          with
          <em>cum laude</em> honors. Skilled in Project Management, HTML/CSS,
          JS, React.js, Databases, MERN Stack, and API Interaction. <br />
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
          <a href="https://www.credly.com/badges/fcbb4cbb-1a06-4ff7-a5da-d751930b8d79/public_url">
            <img src={badge} alt="UNC-Chapel Hill Full Stack Web Developer Badge"/>
          </a>
        </p>
      </div>
      {/* <div className="row">
        <div className="column">
          <img className="photo-grid">
          <img className="photo-grid">
          <img className="photo-grid">
          <img className="photo-grid">
          <img className="photo-grid">
          <img className="photo-grid">
          <img className="photo-grid">
        </div>
        <div className="column">
          <img className="photo-grid">
          <img className="photo-grid">
          <img className="photo-grid">
          <img className="photo-grid">
          <img className="photo-grid">
          <img className="photo-grid">
        </div>  
        <div className="column">
          <img className="photo-grid">
          <img className="photo-grid">
          <img className="photo-grid">
          <img className="photo-grid">
          <img className="photo-grid">
          <img className="photo-grid">
          <img className="photo-grid">
        </div>
        <div className="column">
          <img className="photo-grid">
          <img className="photo-grid">
          <img className="photo-grid">
          <img className="photo-grid">
          <img className="photo-grid">
          <img className="photo-grid">
        </div>
      </div> */}
    </section>
  );
}

export default About;
