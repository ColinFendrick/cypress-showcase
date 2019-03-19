import React, { Component } from 'react';
import { Search } from './Search';
import { Results } from './Results';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { results: ['stringy', 'blindgy'] };
    this.setResults = this.setResults.bind(this);
  };

  setResults = results => this.setState(state => state.results = results);

  render() {
    return (
      <div className="App">
        <Search />
        <Results results={this.state.results}/>
      </div>
    );
  }
}

export default App;
