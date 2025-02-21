import React from "react";

interface Props {}

export const Header: React.FC<Props> = () => {

  return (
    <div className="ui container ">
      <h2 className="ui header">
        <i className="tv icon"></i>
        <div className="content">
          Search TV Shows And Movies
          <div className="sub header">
            <span>
              Powered by&nbsp;
              <a href="http://api.tvmaze.com">https://api.tvmaze.com</a>
            </span>
          </div>
        </div>
      </h2>
    </div>
  );
};
