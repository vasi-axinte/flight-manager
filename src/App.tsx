import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Router from './components/Router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Navigation></Navigation>
        </header>
        <div className="app-body">
          <Router></Router>
        </div>
      </div>
    );
  }
}

export default App;
