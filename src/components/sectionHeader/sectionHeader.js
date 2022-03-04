import React from "react";
import "./sectionHeader.css";

function SectionHeader({ className, headerText }) {
  return (
    <div className={`${className} section-header-container`}>
      <h3 className="section-header-text">{headerText}</h3>
      <hr className="visual-line"></hr>
    </div>
  );
}

export default SectionHeader;
