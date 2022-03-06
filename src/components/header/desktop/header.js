import React from "react";
import { LogoComponent } from "../../index";
import "./header.css";

function Header({ className }) {
  return (
    <header className={className} id="myHeader">
      <LogoComponent className="logo-container" />
      <div className="header-link-container">
        <a href="#introductionSection" className="header-link">
          Introduction
        </a>
        <a href="#aboutMeSection" className="header-link">
          About
        </a>
        <a href="#experienceSection" className="header-link">
          Experience
        </a>
        <a href="#portfolioSection" className="header-link">
          Portfolio
        </a>
      </div>
    </header>
  );
}

export default Header;
