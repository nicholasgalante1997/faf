import React from "react";
import ReactMarkdown from "react-markdown";
import { programsContent } from "../content/programs";

export default function Programs() {
  return (
    <div className="page programs-page">
      <div className="container">
        <ReactMarkdown>{programsContent}</ReactMarkdown>

        <div className="program-cta">
          <h2>Ready to Make an Impact?</h2>
          <div className="cta-buttons">
            <a href="/donate" className="btn btn-primary">
              Support Our Programs
            </a>
            <a href="/contact" className="btn btn-outline">
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
