import React, { memo } from "react";
import ReactMarkdown from "react-markdown";
import { creationStoryMarkup } from "../content/creation-story";

function OriginPost() {
  return (
    <div className="page about-page">
      <div className="container">
        <ReactMarkdown>{creationStoryMarkup}</ReactMarkdown>
      </div>
    </div>
  );
}

export default memo(OriginPost);
