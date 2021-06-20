import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <div className="App">
      <nav>
        <h2>Get Books</h2>
        <ul className="nav-links">
          <Link style={navStyle} to="/about">
            <li>About</li>
          </Link>
          <Link style={navStyle} to="/quotes">
            <li>Quotes</li>
          </Link>
          <Link style={navStyle} to="/contacts">
            <li>Go to Open Library</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
