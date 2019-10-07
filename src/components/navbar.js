import React from "react";
import { Link } from 'react-router-dom'
import "./navbar.css";

function Navbar(){
  return (
    <nav id='navbar'>

        <ul className="navbar-nav grid-container">
            <Link to="/" className="nav-link">Home </Link>           
          
            <Link to="/portfolio" className="nav-link" >Portfolio</Link>
          
            <Link className="nav-link" to="/contact">Contact</Link>
          

        </ul>

    </nav>
  )
}

export default Navbar;