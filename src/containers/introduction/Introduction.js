import React, { Component } from "react";
import { Fade } from "react-bootstrap";
import { introduction } from "../../portfolio";
import "./Introduction.css";
import OntheOffice from "./OntheOffice";

class Introduction extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <Fade bottom duration={2000} distance="40px">
        <div className="intro-main" id="introduction">
          <div className="introduction-main">
            <div className="introduction-image-div">
              <OntheOffice theme={theme} />
            </div>

            <div className="introduction-text-div">
              <div>
                <h1 className="introduction-text" style={{ color: theme.text }}>
                  {introduction.title}
                </h1>

                <div
                  className="introduction-text-p"
                  style={{ color: theme.secondaryText }}
                >
                  <p>{introduction.intro}</p>

                  <p>
                    🎯 <strong>Current Focus:</strong>
                  </p>

                  <ul>
                    {introduction.currentFocus.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>

                  <p>
                    🌱 <strong>I'm Currently:</strong>
                  </p>

                  <ul>
                    {introduction.currently.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Introduction;
