import React from "react";
import "../styles/style.css";
import { NavLink } from "react-router-dom";
import resume from "../documents/Jordan-DuBose-Resume.pdf";

function Navigation() {
  return (
    <nav>
      <container class="nav-items">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <NavLink
              exact
              className={(isActive) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
              activeClassName="selected"
              to="/portfolio"
            >
              About Me
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              className={(isActive) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
              activeClassName="selected"
              to="/portfolio/work"
            >
              Work
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              className={(isActive) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
              activeClassName="selected"
              to="/portfolio/contact"
            >
              Contact
            </NavLink>
          </li>
          {/* Link to PDF Resume */}
          <li class="nav-item">
            <NavLink
              className={(isActive) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
              activeClassName="selected"
              to={resume}
              target="_blank"
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </container>
    </nav>
  );
}

export default Navigation;
