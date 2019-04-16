import React, { Component } from 'react';
import { Search } from './Search';
import { Results } from './Results';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { results: [] };
    this.setResults = this.setResults.bind(this);
  };

  setResults = (error, res) => {
    console.log(error, res)
    if (error) {
      window.alert(error);
    } else if (res && res.body.length === 0) {
      window.alert('No results')
    } else if (res && res.body.length) {
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
