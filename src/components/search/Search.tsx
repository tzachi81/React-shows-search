import React from "react";

interface ISearchProps {
  searchValue: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search: React.FC<ISearchProps> = ({
  searchValue,
  handleSearchChange,
}) => {
  return (
    <div className="ui category search">
      <div className="ui icon input">
        <input
          type="text"
          className="prompt"
          placeholder="search..."
          value={searchValue}
          onChange={handleSearchChange}
        />
        <i className="search icon"></i>
      </div>
    </div>
  );
};
