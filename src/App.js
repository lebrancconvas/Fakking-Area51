import React from 'react';
import logo from './alienface1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to A R E A 5 1
        </h1>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=Jd4Hd-HFgls"
          target="_blank"
          rel="noopener noreferrer"
        >
          What is Area51 ?
        </a>
        <a className="App-link" href="https://github.com/lebrancconvas/Fakking-Area51">Github Repo</a>
      </header>
    </div>
  );
}

export default App;
