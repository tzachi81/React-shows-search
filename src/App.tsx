import React, { ChangeEvent } from 'react';
import { Header } from './components/header/Header';
import { List } from './components/list/List';
import './App.css';

interface Props{};

interface State {
  q: string,
  shows: any
}

class App extends React.Component<Props, State> {

  state = {
    q: '',
    shows: []
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
    const { q, shows } = this.state;
    return(
      <div className="App">
        <Header handleSearchChange={this.handleSearchChange} q={q} />
        <List shows={shows}/>
      </div>

    )
  }

}

export default App;
