import React from "react";
import "./appSearch.css";

interface ISearchProps {
  searchValue: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AppSearch: React.FC<ISearchProps> = ({
  searchValue,
  handleSearchChange,
}) => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          autoFocus
          type="text"
          autoComplete="off"
          value={searchValue}
          placeholder="Search..."
          tabIndex={0}
          className="prompt"
          onChange={handleSearchChange}
        />
        <i aria-hidden="true" className="search icon"></i>
      </div>
    </div>
  );
};
