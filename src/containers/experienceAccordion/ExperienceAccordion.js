import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { getExperienceSurfaces } from "../../utils/experienceTheme";

function isLightColor(hex = "#ffffff") {
  const color = String(hex).replace("#", "");
  if (color.length !== 6) {
    return true;
  }
  const r = parseInt(color.slice(0, 2), 16);
  const g = parseInt(color.slice(2, 4), 16);
  const b = parseInt(color.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 150;
}

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    const { panelBg, headerBg } = getExperienceSurfaces(theme);
    const headerColor = isLightColor(theme.text) ? "#001C55" : theme.text;

    return (
      <div
        className="experience-accord"
        style={{ backgroundColor: theme.body }}
      >
        <Accordion
          initialState={{
            expanded: this.props.sections
              .filter((section) => section.work || section.title === "Work")
              .map((section) => section.title),
          }}
          overrides={{
            Root: {
              style: {
                backgroundColor: theme.body,
              },
            },
          }}
        >
          {this.props.sections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
                overrides={{
                  Header: {
                    style: ({ $expanded }) => ({
                      backgroundColor: headerBg,
                      border: `1px solid ${theme.headerColor}`,
                      borderRadius: $expanded ? "12px 12px 0 0" : "12px",
                      fontFamily: "Google Sans Regular",
                      fontSize: "22px",
                      fontWeight: 600,
                      color: headerColor,
                      paddingTop: "18px",
                      paddingBottom: "18px",
                      marginBottom: $expanded ? "0px" : "14px",
                      ":hover": {
                        color: headerColor,
                      },
                    }),
                  },
                  Content: {
                    style: () => ({
                      backgroundColor: panelBg,
                      color: theme.expTxtColor || "#1f2937",
                      border: `1px solid ${theme.headerColor}`,
                      borderTop: "none",
                      borderRadius: "0 0 12px 12px",
                      marginBottom: "14px",
                      paddingTop: "8px",
                      paddingBottom: "16px",
                      backgroundImage: "none",
                    }),
                  },
                }}
              >
                {section["experiences"].map((experience, index) => {
                  return (
                    <ExperienceCard
                      key={`${section["title"]}-${index}`}
                      index={index}
                      totalCards={section["experiences"].length}
                      experience={experience}
                      theme={theme}
                    />
                  );
                })}
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
