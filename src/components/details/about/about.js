import React from "react";

import "./about.css";

const About = () => {
  return (
    <div id="aboutSection">
      <div className="about-content">
        <span className="introduction">
          Hey, I'm <span className="name">Camerone.</span>
        </span>{" "}
        <p className="bio bio-text" id="cs-text">
          <br /> I moved from the San Francisco Bay Area to Portland, Oregon in
          2015. I have since begun working in web development, using my art and
          woodworking past to inform how I build websites from start to finish.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
