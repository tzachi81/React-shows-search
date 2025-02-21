import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Home } from "./routes/home_route/Home";
import { Show } from "./routes/Show";
import "./App.css";

interface Props {}

class App extends React.Component<Props> {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="ui container segment">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
