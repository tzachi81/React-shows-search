import React, { ChangeEvent } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Home } from "./routes/home_route/Home";
import { Show } from "./routes/Show";
import "./App.css";

interface Props {}

interface State {
  q: string;
  shows: any;
  id: number;
}

class App extends React.Component<Props, State> {
  state = {
    q: "",
    shows: [],
    id: 0,
  };

  handleSearchChange = (event: any) => {
    const query = event.target.value;
    this.setState({ q: query });

    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ shows: data });
      });
  };

  render() {
    const { q, shows, id } = this.state;
    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home q={q} shows={shows} handleSearchChange={this.handleSearchChange}/>}
          />
          <Route
            path="/show/:id"
            element={<Show q={q} shows={shows} id={id} />}
          />
            <Route path="/home" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
