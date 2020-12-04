import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "@material-ui/icons";
import "./navbar.css";

function Navbar() {
  let showBar = true;
  const openMenu = () => {
    console.log("clicked");
    showBar = !showBar;
  };
  return showBar ? (
    <nav id="navbar">
      <ul className="navbar-nav grid-container">
        {/* <p className="initials">CS</p> */}
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
  ) : (
    <div className="grid-container">
      <button onClick={openMenu()} className="hamburgerMenu">
        <Menu />
      </button>
    </div>
  );
}

export default Navbar;
