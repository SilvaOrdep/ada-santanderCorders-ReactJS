import React from "react";
import "./style.css";

export class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav id="navbar">
          <div className="nav-brand">
            <img src="" alt="" />
            <h1>Multiverso News</h1>
          </div>

          <ul className="navlist">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Trending</a>
            </li>
            <li>
              <a href="/">Universes</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}