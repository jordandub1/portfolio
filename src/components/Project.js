import React from "react";
import "../styles/style.css";
import checkmate from "../images/check-mate.svg";
import definehub from "../images/definehub.svg";
import weatherdashboard from "../images/weather-dashboard.png";
import notetaker from "../images/note-taker.png";

function Project() {
  return (
    <section className="work">
      <div className="work-header">Applications created:</div>
      {/* Check-Mate Card */}
      <div className="card work-cards" id="check-mate-card">
        <img
          id="check-mate-screenshot"
          src={checkmate}
          className="card-img-top"
          alt="Check-Mate Application"
        />
        <div className="card-body">
          <h5 className="card-title">Check-Mate</h5>
          <p className="card-text">
            Check-mate is a full-stack web application for keeping track of your
            expenses and setting smart savings goals. The application uses
            node.js, express.js, mySQL, and Sequelize to keep track of users,
            their transactions, and their budget goals on the back end and
            Chart.js, Bootstrap, and Handlebars to visualize every financial
            information.
          </p>
          <a
            href="https://check-mate-finance-tool.herokuapp.com/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Application
          </a>
          <a
            href="https://github.com/jordandub1/check-mate"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        </div>
      </div>
      <br />
      {/* DefineHub Card */}
      <div className="card work-cards" id="check-mate-card">
        <img
          id="definehub-screenshot"
          src={definehub}
          className="card-img-top"
          alt="DefineHub Application"
        />
        <div className="card-body">
          <h5 className="card-title">DefineHub</h5>
          <p className="card-text">
            <div className="definehub-body">
              DefineHub is a web application for defining, translating, and
              pronunciation of inputted words. The application uses Bootstrap
              for styling along with Words API, YouTube API, LibreTranslate API,
              and SpeechSynthesis to provide the full user experience.
            </div>
            <ul>
              <li className="card-text">
                Words API - Public API that pulls definitions for the EUs
                inputted word.
              </li>
              <li className="card-text">
                YouTube API - Public API that passes the users inputted word and
                selected language to build search parameters and displays the
                returned video responses in an embedded player.
              </li>
              <li className="card-text">
                LibreTranslate API - Open Source Machine Translation API that
                uses the inputted word and languages to return a translation.
              </li>
              <li className="card-text">
                SpeechSynthesis - Interface of the Web Speech API that allows
                the end user to hear a pronunciation of the inputted word.
              </li>
            </ul>
          </p>
          <a
            href="https://jordandub1.github.io/DefineHub/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Application
          </a>
          <a
            href="https://github.com/jordandub1/DefineHub"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        </div>
      </div>
      <br />
      {/* Weather Dashboard Card */}
      <div className="card work-cards" id="weather-dashboard-card">
        <img
          id="weather-dashboard-screenshot"
          src={weatherdashboard}
          className="card-img-top"
          alt="Weather Dashboard Application"
        />
        <div className="card-body">
          <h5 className="card-title">Weather Dashboard</h5>
          <p className="card-text">
            The Weather Dashboard utilizes the OpenWeather API to pass through
            the user's inputted city and returns the current weather and weather
            outlook for a 5-day forecast. The application also utilizes local
            storage by saving the user's recently searched cities.
          </p>
          <a
            href="https://jordandub1.github.io/weather-dashboard/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Application
          </a>
          <a
            href="https://github.com/jordandub1/weather-dashboard"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        </div>
      </div>
      {/* Note-Taker Card */}
      <div className="card work-cards" id="note-taker-card">
        <img
          id="note-taker-screenshot"
          src={notetaker}
          className="card-img-top"
          alt="Note-Taker Application"
        />
        <div className="card-body">
          <h5 className="card-title">Note-Taker</h5>
          <p className="card-text">
            The Note-Taker application utilizes Express.js back end to save and
            retrieve note data from a JSON file and displays it on the front
            end. This application also utilizes local storage to save notes for
            the end user.
          </p>
          <a
            href="https://note-taker-jordandub1.herokuapp.com/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Application
          </a>
          <a
            href="https://github.com/jordandub1/note-taker"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project;
