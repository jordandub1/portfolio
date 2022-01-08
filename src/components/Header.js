import React from "react";
import Navigation from "./Navigation";
import "../styles/style.css";
import logo from "../images/logo192.png";
import hero from "../images/hero.png";

var sectionStyle = {
  backgroundImage: "url(" + hero + ")",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

function Header() {
  return (
    <header className="sticky-top">
      {/*Hero Image*/}
      <div style={sectionStyle}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            {/*JD Logo*/}
            <img
              id="logo"
              src={logo}
              alt="Jordan DuBose Logo"
              height="125.8px"
              width="211.77px"
            />
            <Navigation />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
