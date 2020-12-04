import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuOpen } from "@material-ui/icons";
import "./navbar.css";

function Navbar() {
  let [showBar, setBar] = useState(false);

  return showBar ? (
    <nav id="navbar">
      <ul className="navbar-nav grid-container">
        {/* <p className="initials">CS</p> */}
        <a href="#aboutSection" className="nav-link">
          Home{" "}
        </a>

        <a href="#portfolioSection" className="nav-link">
          Projects
        </a>

        <a href="#contactFooter" className="nav-link">
          Contact
        </a>

        <button className="nav-link" onClick={() => setBar((showBar = false))}>
          <MenuOpen />
        </button>
      </ul>
    </nav>
  ) : (
    <div className="grid-container">
      <button
        onClick={() => setBar((showBar = true))}
        className="hamburgerMenu"
      >
        <Menu />
      </button>
    </div>
  );
}

export default Navbar;
