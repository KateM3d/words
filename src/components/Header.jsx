import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Header() {
  return (
    <div className="header">
      <ul className="headerMenu">
        <Link to="/">
          <img src={logo} alt={logo} className="logo" />
        </Link>
        <p className="menuSlogan">Learn French Today...</p>
        <Link to="/exercise">
          <li className="menu">Exercise</li>
        </Link>
        <Link to="/table">
          <li className="menu">Table</li>
        </Link>
        <Link to="/words">
          <li className="menu">Words</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
