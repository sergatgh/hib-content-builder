import React from 'react';
import logo from '../logo.svg';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Development of content builder for "Haskell Pocket Book" started.
        </p>
        <a
          className="App-link"
          href="https://play.google.com/store/apps/details?id=com.WittyLion.haskell_is_beautiful"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download in Play Market
        </a>
      </header>
    </div>
  );
}

export default Home;
