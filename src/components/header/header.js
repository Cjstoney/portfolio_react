import React from "react";
import { LogoComponent } from "..";
import "./header.css";

function Header() {
  return (
    <header>
      <LogoComponent />
      <a href="#aboutMeSection" className="header-link">
        About
      </a>
      <a href="portfolioSection" className="header-link">
        Portfolio
      </a>
      <a href="introductionSection" className="header-link">
        Introduction
      </a>
    </header>
  );
}

export default Header;
