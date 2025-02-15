import './tile.css';
import React from "react";

interface Props {
  name: string;
  pic: string;
  type: string;
  language: string;
  summary: string;
  url: string;
}

export const Tile: React.FC<Props> = ({
  pic,
  name,
  type,
  language,
  summary,
  url,
}) => {
  var parser = new DOMParser();
  var parsedSummary = parser.parseFromString(summary, "text/html").children[0]
    .textContent;
  return (
    <div className="ui card ">
      <div className="content">
        <div className="header">{name}</div>
        <div className="image">
          <a href={url} target="_blank">
            <img src={pic} alt={name} />
          </a>
        </div>
        <div className="meta">
          <span>{type}</span>
          <span> {language}</span>
        </div>
        <div className="description">{parsedSummary}</div>
      </div>
    </div>
  );
};
