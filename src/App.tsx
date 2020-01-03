import React, { ChangeEvent } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Home } from './routes/home_route/Home';
import { Show } from './routes/show_route/Show';
import './App.css';

interface Props {

};

interface State {
  q: string,
  shows: any,
  id: number,
}

class App extends React.Component<Props, State> {

  state = {
    q: '',
    shows: [],
    id: 0
  }

  handleSearchChange = (event: any) => {
    
    const query = event.target.value;
    this.setState({q: query});

    fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
    .then( res => res.json())
    .then( data => {
      this.setState({ shows: data })
    })

  }

  render(){
    const { q, shows, id } = this.state;
    return(
      <Router>
          <Switch>
            <Route path="/home">
              <Home
                q={q}
                shows={shows}
                handleSearchChange={this.handleSearchChange}
                />
            </Route>
            <Route path="/show/:id">
              <Show
                q={q}
                shows={shows}
                id={id}
                />
            </Route>
            <Redirect to="/home" />
          </Switch>
      </Router>
    );
  }
}

export default App;
