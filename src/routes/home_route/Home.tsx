import React, { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import { List } from "../../components/list/List";
import "../home_route/home.css";
import { useDebounce } from "../../hooks/useDebounce";
import { Search } from "../../components/search/Search";

interface Props {}

export const Home: React.FC<Props> = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedValue = useDebounce(searchValue, 300); // 300ms delay
  const [shows, setShows] = useState({});

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (debouncedValue) {
      const apiBase = "https://api.tvmaze.com/search/shows?";
      fetch(`${apiBase}q=${debouncedValue}`)
        .then((res) => res.json())
        .then((data) => setShows(data));
    }
  }, [debouncedValue, setSearchValue]);

  return (
    <div className="ui container">
      <Header />
      <Search searchValue={searchValue} handleSearchChange={handleSearchChange}/>
      {Object.keys(shows).length > 0 && <List shows={shows} />}
    </div>
  );
};
