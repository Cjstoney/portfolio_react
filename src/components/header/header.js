import React from "react";
import { LogoComponent } from "..";
import "./header.css";

function Header({ className }) {
  return (
    <header className={className} id="myHeader">
      <LogoComponent />
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
    </header>
  );
}

export default Header;
