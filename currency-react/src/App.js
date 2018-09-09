import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetRates from './components/GetRates';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" width="400" />
          <h1 className="App-title">
            Welcome to the MyStrengthBook Code Test!
          </h1>
          <p>Thank you for the opportunity!</p>
        </header>
        <GetRates />
      </div>
    );
  }
}

export default App;
