import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav id="navbar">
      <ul className="navbar-nav grid-container">
        <Link to="/" className="nav-link">
          Home{" "}
        </Link>

        <Link to="/portfolio" className="nav-link">
          Projects
        </Link>

        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
