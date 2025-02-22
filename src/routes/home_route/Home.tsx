import React, { useEffect, useState } from "react";
import { AppHeader } from "../../components/appHeader/AppHeader";
import { List } from "../../components/list/List";
import "../home_route/home.css";
import { useDebounce } from "../../hooks/useDebounce";
import { AppSearch } from "../../components/appSearch/AppSearch";
import {
  Grid,
  GridRow,
} from "semantic-ui-react";
import { IShow } from "../../types";

interface Props {}

export const Home: React.FC<Props> = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedValue = useDebounce(searchValue, 400);
  const [shows, setShows] = useState({});

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (debouncedValue) {
      const apiBase = "https://api.tvmaze.com/search/shows?";
      fetch(`${apiBase}q=${debouncedValue}`)
        .then((res) => res.json())
        .then((data: IShow[]) => {
          const orderByScore = data.sort((a, b) => b.score - a.score);
          setShows(orderByScore);
        });
    }
  }, [debouncedValue, setSearchValue]);

  return (
    <Grid padded>
      <GridRow>
        <AppHeader />
      </GridRow>
      <GridRow>
        <AppSearch
          searchValue={searchValue}
          handleSearchChange={handleSearchChange}
        />
      </GridRow>
      <GridRow >
      {Object.keys(shows).length > 0 && <List shows={shows} />}
      </GridRow>
    </Grid>
  );
};
