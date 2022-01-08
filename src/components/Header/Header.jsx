import React from "react";
import logo from "./logo.jpg";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <ul className="headerMenu">
        <Link to="/">
          <img src={logo} alt={logo} className="logo" />
        </Link>
        <p className="menuSlogan">Learn French Today...</p>
        <Link to="/category">
          <li className="menu">Category</li>
        </Link>
        <Link to="/exercise">
          <li className="menu">Exercise</li>
        </Link>
        <Link to="/table">
          <li className="menu">Table</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
