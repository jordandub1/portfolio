import React from "react";
import "../styles/style.css";
import github from "../images/github-black.png";
import linkedin from "../images/linkedin-black.png";
import stack from "../images/stack-black.png";

function Contact() {
  return (
    <section className="contact-me">
      <div className="card card-color">
        <div className="card-body contact-body">
          <h5 className="card-title">How to contact me:</h5>
          <p className="card-text">
            Please feel free to reach out to me with any questions about my
            portfolio, job opportunities, or for fun!
          </p>
          <p>
            Email:{" "}
            <a href="mailto:jordan.dubose1@gmail.com">
              jordan.dubose1@gmail.com
            </a>
          </p>
          <p>
            Mobile Number: <a href="tel:9193307518">919.330.7518</a>
          </p>
        </div>
        <div className="contactlogos">
          <a href="https://github.com/jordandub1" target="blank">
            <img src={github} alt="GitHub Logo" height="80px" />
          </a>
          <a href="https://www.linkedin.com/in/jordandubose/" target="blank">
            <img src={linkedin} alt="LinkedIn Logo" height="80px" />
          </a>
          <a
            href="https://stackoverflow.com/users/16518817/jordandubose"
            target="blank"
          >
            <img src={stack} alt="stackoverflow Logo" height="80px" />
          </a>
        </div>
      </div>
      <div className="modal-body"></div>
    </section>
  );
}

export default Contact;
