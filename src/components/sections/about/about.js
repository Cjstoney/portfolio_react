import React from "react";
import { useState } from "react";
import Waves from "../../parts/waves";
import "./about.css";

const About = () => {
  const [moreInfo, toggleInfo] = useState(false);

  const addClass = () => {
    const el = document.getElementById("bioId");
    el.setAttribute("class", "longBio");
    toggleInfo(!moreInfo);
  };
  const shortBio = `I moved from the San Francisco Bay Area to Portland, Oregon in 2015. I
  have since begun working in web development, using my art and
  woodworking past to inform how I build websites from start to finish.`;

  const extraInfo = `${shortBio} 
  After growing up in the Bay Area, I spent three years at The San Francisco Art Institute studying Fine Art with an emphasis in painting and photography.
  After I graduated, I moved to Portland with my wife and our friend where I got a job as a production woodworker, helping to build custom greenhouses. After three years I decided to 
  learn web development and transition careers. `;

  return (
    <div className="about-content">
      <h1 className="introduction">
        HI, I'M <br />
        CAMERONE
      </h1>
      <Waves />
      <p id="bioId" className="bio ">{`${
        !!moreInfo ? extraInfo : shortBio
      }`}</p>
      <button className="learnMoreBtn" onClick={() => addClass()}>
        {`Want to know ${!!moreInfo ? "less" : "more"}?`}
      </button>
    </div>
  );
};

export default About;
