import React from "react";
import "../styles/style.css";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import stack from "../images/stack.png";

function Footer() {
  return (
    <footer className="sticky-footer sticky-bottom">
      <div className="footer-content">
        <a href="https://github.com/jordandub1" target="blank">
          <img src={github} alt="GitHub Logo" height="50px" />
        </a>
        <a href="https://www.linkedin.com/in/jordandubose/" target="blank">
          <img src={linkedin} alt="LinkedIn Logo" height="50px" />
        </a>
        <a
          href="https://stackoverflow.com/users/16518817/jordandubose"
          target="blank"
        >
          <img src={stack} alt="stackoverflow Logo" height="50px" />
        </a>
        <span className="copyright-notice">
          <span>&copy;</span>
          <span property="dc:date" datatype="xsd:gYear">
            2022
          </span>
          <span> Jordan DuBose</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
