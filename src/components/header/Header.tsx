import React, { ChangeEvent } from "react";

interface Props {
  q: string;
  handleSearchChange(q: ChangeEvent<HTMLInputElement>): void;
}

export const Header: React.FC<Props> = ({ q, handleSearchChange }) => {
  return (
    <div className="ui container ">
      <h2 className="ui header">
        <i className="tv icon"></i>
        <div className="content">
          Search TV Shows And Movies
          <div className="sub header">
            <span>
              Powered by&nbsp;
              <a href="http://api.tvmaze.com">
                https://api.tvmaze.com
              </a>
            </span>
          </div>
        </div>
      </h2>

      <div className="ui category search">
        <div className="ui icon input">
          <input
            type="text"
            className="prompt"
            placeholder="search..."
            value={q}
            onChange={handleSearchChange}
          />
          <i className="search icon"></i>
        </div>
      
      </div>
      
    </div>
  );
};
