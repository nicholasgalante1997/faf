import React from "react";
import ReactMarkdown from "react-markdown";
import { impactContent } from "../content/impact";

export default function Impact() {
  return (
    <div className="page impact-page">
      <div className="container">
        <ReactMarkdown>{impactContent}</ReactMarkdown>

        <div className="impact-cta">
          <h2>Be Part of Our Growing Impact</h2>
          <p>Every donation creates measurable change. Join thousands of supporters making a difference.</p>
          <div className="cta-buttons">
            <a href="/donate" className="btn btn-primary">
              Donate Today
            </a>
            <a href="#" className="btn btn-outline">
              Download Full Report
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
