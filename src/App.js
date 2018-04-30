import React, { Component } from 'react';
import logo from './hipmunk-logo';
import './App.css';
import Tiles from './Tiles.js';
import data from './data.json';
import Dropdown from './Dropdown.js';

class App extends Component {

  componentDidMount() {
    alert(data.hotels);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hotels - Provided by Hipmunk</h1>
          <img src={logo} className="App-logo" />
        </header>
        <Tiles />
        <Dropdown />
      </div>
    );
  }
}

export default App;
