import React from "react";
import "./introduction.css";
import { ArrowForward } from "@material-ui/icons";

const Introduction = () => {
  return (
    <div className="about-content">
      <h1 className="introduction">
        Hello. <br />I am <span className="name">Camerone</span>
      </h1>
      <div className="small-text-container">
        <ArrowForward className="arrow-icon" />
        <p className="introduction-text">
          Web Developer. Woodworker. Avid Learner.
        </p>
        <p className="introduction-text" id="desktop-only">
          Currently employed at
          <span className="text-accent-color"> Softcrylic</span> as an
          <span className="text-accent-color"> Implementation Engineer</span>.
        </p>
      </div>
      <picture className="picture">
        <img
          src="/images/cameroneStoney.png"
          alt="Image of Camerone Stoney"
          className="self-image"
        />
      </picture>
    </div>
  );
};

export default Introduction;
