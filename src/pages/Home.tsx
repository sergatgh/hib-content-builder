import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Development of content builder for "Haskell Pocket Book" started.</p>
        <a
          className="App-link"
          href="https://play.google.com/store/apps/details?id=com.WittyLion.haskell_is_beautiful"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download in Play Market
        </a>
        <a
          className="App-link"
          href="https://github.com/sergatgh/hib-content-builder"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <Link to="/builder">Builder</Link>
      </header>
    </div>
  );
}

export default Home;
