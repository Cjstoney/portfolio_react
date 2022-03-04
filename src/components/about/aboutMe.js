import React from "react";
import "./aboutMe.css";
import { SectionHeaderComponent } from "../index";

function AboutMe({ className }) {
  return (
    <div className={className}>
      <SectionHeaderComponent
        className="about-me-header"
        headerText="About Me"
      />
      <div className="about-me-content">
        Hi, my name is Camerone Stoney and I like to make things on the web. In
        2019 I completed a full stack web development boot camp after dabbling
        in tech for a while. Since that time, I have been doing web development
        and analytics implementation full time with little side projects along
        the way.
      </div>
      <picture className="about-me-picture">
        <img
          src="/images/cameroneStoney.png"
          alt="Image of Camerone Stoney"
          className="self-image"
        />
      </picture>
    </div>
  );
}

export default AboutMe;
