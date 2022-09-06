import React from 'react';
import logo from './logo.svg';
import ClickButtonState from './components/ClickButtonState';
import ClickButtonEffect from './components/ClickButtonEffect';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React
        </p>
        <span>UseState</span><ClickButtonState />
        <span>useEffect</span><ClickButtonEffect />
      </header>
    </div>
  );
};

export default App;
