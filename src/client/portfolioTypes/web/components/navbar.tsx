import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav id="navbar">
      <ul className="navbar-nav grid-container">
        <Link to="/webHome" className="nav-link">
          Home{" "}
        </Link>

        <Link to="/webPortfolio" className="nav-link">
          Portfolio
        </Link>

        <Link className="nav-link" to="/webContact">
          Contact
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
