import React, { Component, createRef } from "react";
import ReactDOM from "react-dom";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  event.currentTarget.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  event.currentTarget.style.backgroundColor = "transparent";
};

class Header extends Component {
  themeBtnRef = createRef();

  componentDidUpdate(prevProps) {
    if (this.props.showThemes && !prevProps.showThemes) {
      this.forceUpdate();
    }
  }

  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "/home";

    // Names corresponding to the themes in App.js
    const themeNames = [
      "Blue",
      "Brown",
      "Purple",
      "Green",
      "Red",
      "Black",
      "Pink",
      "Violet",
      "Teal",
      "Orange",
      "Yellow",
      "Material Dark",
      "Material Light",
      "Material Teal",
    ];

    // Position the dropdown relative to the toggle button (portal target)
    let paletteStyle = {};
    if (this.themeBtnRef.current) {
      const rect = this.themeBtnRef.current.getBoundingClientRect();
      paletteStyle = {
        position: "fixed",
        top: rect.bottom + 6,
        left: rect.right - 140, // 140 = palette width, right-aligned to button
        backgroundColor: theme.body,
      };
    }

    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />

        <div>
          <header className="header">
            {/* LOGO */}
            <NavLink to={link} className="logo">
              <span style={{ color: theme.text }}>&lt;</span>

              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>

              <span style={{ color: theme.text }}>/&gt;</span>
            </NavLink>

            {/* MOBILE MENU */}
            <input className="menu-btn" type="checkbox" id="menu-btn" />

            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>

            {/* MENU */}
            <ul
              className="menu"
              style={{
                backgroundColor: theme.body,
              }}
            >
              <li>
                <NavLink
                  to="/home"
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={onMouseOut}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/education"
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={onMouseOut}
                >
                  Education
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/experience"
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={onMouseOut}
                >
                  Experience
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/projects"
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={onMouseOut}
                >
                  Projects
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={onMouseOut}
                >
                  Contact Me
                </NavLink>
              </li>

              {/* THEME BUTTON */}
              <li className="theme-container">
                <button
                  ref={this.themeBtnRef}
                  type="button"
                  className="theme-toggle"
                  onClick={this.props.toggleTheme}
                  title="Change Theme"
                  style={{
                    color: theme.text,
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />

                    <path
                      d="M12 2V5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 19V22"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M2 12H5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M19 12H22"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />

                    <path
                      d="M4.93 4.93L7.05 7.05"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16.95 16.95L19.07 19.07"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M19.07 4.93L16.95 7.05"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7.05 16.95L4.93 19.07"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                {/* THEME MENU — rendered into a portal so nothing can overlap it */}
                {this.props.showThemes &&
                  this.props.themes &&
                  ReactDOM.createPortal(
                    <div className="theme-palette" style={paletteStyle}>
                      {this.props.themes.map((themeOption, index) => (
                        <button
                          type="button"
                          key={index}
                          className="theme-option"
                          onClick={() => this.props.changeTheme(themeOption)}
                          style={{
                            color: theme.text,
                          }}
                        >
                          {themeNames[index]}
                        </button>
                      ))}
                    </div>,
                    document.body
                  )}
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}

export default Header;
