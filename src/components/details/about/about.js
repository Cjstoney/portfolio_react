import React from "react";
import { Link } from "react-router-dom";
import techCards from "../../../techcards.json";
import TechsComp from "../../../components/parts/technologies/techsComp";
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="about-content">
        <p className="bio bio-text" id="cs-text">
          I am Camerone Stoney. I moved from the San Francisco Bay Area to
          Portland, Oregon in 2015. While in the Bay Area, I studied Fine Art
          with an emphasis in painting at The San Francisco Art Institute. After
          moving to Portland, I worked for three years as a fine woodworker. I
          have since begun working in web development, using my art background
          to influence my aesthetic choices and my woodworking production
          knowledge to build websites from start to finish.{" "}
        </p>
      </div>
      <hr className="break"></hr>
      <p className="tech-header">Technology proficiencies</p>
      <ul className="proficiencies">
        {techCards.map((data) => (
          <TechsComp
            id={data.id}
            image={data.image}
            technology={data.technology}
            key={data.id}
          />
        ))}
      </ul>
      <hr className="break"></hr>
      <div className="forLink">
        <Link to="/Portfolio" className="route">
          Projects &#8594;
        </Link>
      </div>
    </div>
  );
};

export default About;
