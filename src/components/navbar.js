import React from "react";
import { Link } from 'react-router-dom'
import "./navbar.css";

function Navbar(){
  return (
    <nav>

      <div className=" navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/" 
              className={
                window.location.pathname === "/" || window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              } >Home </Link>
          </li>
          <li className="nav-item">
            <Link 
            to="/about"  className={
              window.location.pathname === "/" || window.location.pathname === "/"
                ? "nav-link active"
                : "nav-link"
            } >About</Link>
          </li> 
          <li className="nav-item">
            <Link
            to="/portfolio" className="nav-link" >Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>

        </ul>

      </div>
    </nav>
  )
}

export default Navbar;