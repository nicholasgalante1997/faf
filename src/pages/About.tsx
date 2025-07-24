import React, { memo } from "react";
import ReactMarkdown from "react-markdown";
import { aboutContent } from "../content/about";

function About() {
  return (
    <div className="page about-page">
      <div className="container">
        <ReactMarkdown>{aboutContent}</ReactMarkdown>
      </div>
    </div>
  );
}

export default memo(About);
