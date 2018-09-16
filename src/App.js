import React, { Component } from 'react';
import List from "./components/list.js";
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Account</h1>
        </header>
        <div className="App-intro">
          <List/>
        </div>
      </div>
    ); 
  }
}

export default App;
