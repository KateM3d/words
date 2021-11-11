import React from "react";
import logo from "./logo.jpg";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <ul className="headerMenu">
        <img src={logo} alt={logo} className="logo" />
        <li className="menu">Category</li>
        <li className="menu">Exercise</li>
        <li className="menu">Notes</li>
      </ul>
    </div>
  );
}

export default Header;
