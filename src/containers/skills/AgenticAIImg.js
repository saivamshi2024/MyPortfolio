import React, { Component } from "react";

export default class AgenticAIImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1100"
        height="720"
        viewBox="0 0 1100 720"
      >
        <title>agentic ai</title>
        <ellipse
          cx="550"
          cy="690"
          rx="280"
          ry="18"
          fill={theme.compImgHighlight}
        />

        {/* Monitor frame */}
        <rect
          x="210"
          y="70"
          width="680"
          height="430"
          rx="18"
          fill={theme.text}
        />
        <rect
          x="230"
          y="90"
          width="640"
          height="370"
          rx="8"
          fill={theme.compImgHighlight}
        />
        <rect x="500" y="500" width="100" height="28" fill={theme.text} />
        <rect
          x="430"
          y="528"
          width="240"
          height="16"
          rx="4"
          fill={theme.text}
        />

        {/* Window dots */}
        <circle cx="258" cy="112" r="8" fill={theme.imageHighlight} />
        <circle cx="282" cy="112" r="8" fill={theme.jacketColor} />
        <circle cx="306" cy="112" r="8" fill={theme.text} />

        {/* Neural network */}
        <g stroke={theme.imageHighlight} strokeWidth="3" fill="none">
          <line x1="370" y1="220" x2="470" y2="180" />
          <line x1="370" y1="220" x2="470" y2="250" />
          <line x1="370" y1="220" x2="470" y2="320" />
          <line x1="370" y1="300" x2="470" y2="180" />
          <line x1="370" y1="300" x2="470" y2="250" />
          <line x1="370" y1="300" x2="470" y2="320" />
          <line x1="370" y1="380" x2="470" y2="250" />
          <line x1="370" y1="380" x2="470" y2="320" />
          <line x1="470" y1="180" x2="580" y2="220" />
          <line x1="470" y1="180" x2="580" y2="300" />
          <line x1="470" y1="250" x2="580" y2="220" />
          <line x1="470" y1="250" x2="580" y2="300" />
          <line x1="470" y1="320" x2="580" y2="220" />
          <line x1="470" y1="320" x2="580" y2="300" />
        </g>
        <circle cx="370" cy="220" r="16" fill={theme.imageHighlight} />
        <circle cx="370" cy="300" r="16" fill={theme.jacketColor} />
        <circle cx="370" cy="380" r="16" fill={theme.imageHighlight} />
        <circle cx="470" cy="180" r="18" fill={theme.text} />
        <circle cx="470" cy="250" r="18" fill={theme.imageHighlight} />
        <circle cx="470" cy="320" r="18" fill={theme.jacketColor} />
        <circle cx="580" cy="220" r="20" fill={theme.imageHighlight} />
        <circle cx="580" cy="300" r="20" fill={theme.text} />

        {/* Chat / agent panel */}
        <rect
          x="640"
          y="160"
          width="200"
          height="250"
          rx="12"
          fill={theme.body || "#fff"}
          stroke={theme.text}
          strokeWidth="3"
        />
        <rect
          x="658"
          y="180"
          width="120"
          height="18"
          rx="4"
          fill={theme.imageHighlight}
        />
        <rect
          x="658"
          y="214"
          width="164"
          height="36"
          rx="8"
          fill={theme.compImgHighlight}
        />
        <rect
          x="658"
          y="262"
          width="140"
          height="36"
          rx="8"
          fill={theme.jacketColor}
          opacity="0.85"
        />
        <rect
          x="658"
          y="310"
          width="164"
          height="36"
          rx="8"
          fill={theme.compImgHighlight}
        />
        <circle cx="800" cy="380" r="14" fill={theme.imageHighlight} />
        <rect
          x="658"
          y="368"
          width="110"
          height="14"
          rx="4"
          fill={theme.text}
          opacity="0.35"
        />

        {/* Robot / agent */}
        <rect
          x="150"
          y="470"
          width="120"
          height="90"
          rx="18"
          fill={theme.compImgHighlight}
          stroke={theme.text}
          strokeWidth="3"
        />
        <circle cx="185" cy="505" r="10" fill={theme.imageHighlight} />
        <circle cx="235" cy="505" r="10" fill={theme.imageHighlight} />
        <rect
          x="180"
          y="530"
          width="60"
          height="10"
          rx="5"
          fill={theme.jacketColor}
        />
        <rect x="198" y="445" width="24" height="28" fill={theme.text} />
        <circle cx="210" cy="438" r="14" fill={theme.imageHighlight} />
      </svg>
    );
  }
}
