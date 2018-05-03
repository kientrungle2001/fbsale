import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React By Kien Le</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		<Hello message="Hello Component 2"></Hello>
      </div>
	  
    );
  }
}

export default App;
