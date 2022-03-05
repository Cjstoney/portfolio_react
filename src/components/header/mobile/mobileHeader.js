import React from "react";
import { MenuTripleDotComponent, LogoComponent } from "../../index";
import "./mobileHeader.css";

function MobileHeader({ className }) {
  return (
    <header className={className}>
      <LogoComponent className="mobile-logo" />
      <button className="mobile-menu-btn">
        <MenuTripleDotComponent className="trip-dot-menu" />
      </button>
    </header>
  );
}

export default MobileHeader;
