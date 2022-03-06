import React from "react";
import { LogoComponent } from "../../index";
import "./mobileHeader.css";

function MobileHeader({ className }) {
  return (
    <header className={className}>
      <LogoComponent className="mobile-logo" />
    </header>
  );
}

export default MobileHeader;
