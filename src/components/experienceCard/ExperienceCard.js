import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";
import { getExperienceSurfaces } from "../../utils/experienceTheme";

function isLightColor(hex = "#ffffff") {
  const color = hex.replace("#", "");
  if (color.length !== 6) {
    return true;
  }
  const r = parseInt(color.slice(0, 2), 16);
  const g = parseInt(color.slice(2, 4), 16);
  const b = parseInt(color.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 150;
}

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;
    const accent = experience.color || theme.headerColor;
    const titleColor = isLightColor(theme.text) ? "#001C55" : theme.text;
    const descColor = theme.expTxtColor || "#1f2937";
    const metaColor = "#64748b";
    const { cardBg } = getExperienceSurfaces(theme);

    return (
      <div className="experience-list-item">
        <Fade bottom duration={1500} distance="20px">
          <div
            className="experience-card"
            style={{
              background: cardBg,
              borderColor: accent,
              boxShadow: "none",
            }}
          >
            <div className="experience-card-top">
              <div className="experience-card-logo-div">
                <img
                  className="experience-card-logo"
                  src={require(`../../assets/images/${experience["logo_path"]}`)}
                  alt={experience["company"]}
                  style={{ borderColor: accent }}
                />
              </div>

              <div className="experience-card-heading">
                <div className="experience-card-heading-left">
                  <h3
                    className="experience-card-title"
                    style={{ color: titleColor }}
                  >
                    {experience["title"]}
                  </h3>
                  <p className="experience-card-company">
                    <a
                      href={experience["company_url"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: metaColor }}
                    >
                      {experience["company"]}
                    </a>
                  </p>
                </div>

                <div className="experience-card-heading-right">
                  <p
                    className="experience-card-duration"
                    style={{ color: metaColor }}
                  >
                    {experience["duration"]}
                  </p>
                  <p
                    className="experience-card-location"
                    style={{ color: metaColor }}
                  >
                    {experience["location"]}
                  </p>
                </div>
              </div>
            </div>

            <p
              className="experience-card-description"
              style={{ color: descColor }}
            >
              {experience["description"]}
            </p>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
