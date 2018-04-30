import React, { Component } from 'react';
import logo from './hipmunk-logo';
import './App.css';
import Tiles from './Tiles.js';

class App extends Component {

  componentDidMount() {
    alert("Welcome to my project!");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hotels - Provided by Hipmunk</h1>
          <img src={logo} className="App-logo" alt="" />
        </header>
        <Tiles />
      </div>
    );
  }
}

export default App;
