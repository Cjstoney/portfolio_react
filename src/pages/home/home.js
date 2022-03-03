import React from "react";
import {
  AboutMeComponent,
  ExperienceComponent,
  IntroductionComponent,
} from "../../components/index";
import "./home.css";

const Home = () => {
  return (
    <div className="homePage">
      <IntroductionComponent className="about-content" />
      <AboutMeComponent className="about-me-container" />
      <ExperienceComponent className="experience-container" />
    </div>
  );
};

export default Home;
