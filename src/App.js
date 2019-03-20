import React, { Component } from 'react';
import { Search } from './Search';
import { Results } from './Results';
import { getRequest } from './SearchActions';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { results: [] };
    this.setResults = this.setResults.bind(this);
  };

  // setResults = results => this.setState(state => state.results = results);

  setResults = (error, res) => {
    if (error) {
      console.log(error);
    } else if (res && res.body.length === 0) {
      console.log('No results')
    } else if (res && res.body.length) {
      console.log(res)
      this.setState(state => state.results = res.body)
    };
  };

  render() {
    return (
      <div className="App">
        <Search onSubmit={this.setResults}/>
        <Results results={this.state.results}/>
      </div>
    );
  }
}

export default App;
