import React from "react";
import Waves from "../../parts/waves";

import "./about.css";

const About = () => {
  return (
    <div className="about-content">
      <h1 className="introduction">
        HI, I'M <br />
        CAMERONE
      </h1>

      <Waves />
      <p className="bio ">
        <br /> I moved from the San Francisco Bay Area to Portland, Oregon in
        2015. I have since begun working in web development, using my art and
        woodworking past to inform how I build websites from start to finish.{" "}
      </p>
    </div>
  );
};

export default About;
