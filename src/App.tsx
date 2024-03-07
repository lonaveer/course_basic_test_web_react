import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './app/components/Counter';
import UserProfile from './app/components/UserProfile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Counter />
      <hr />
      <UserProfile username="Jaroon" email="jaroon@test.com" />
    </div>
  );
}

export default App;
