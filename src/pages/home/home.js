import React from "react";
import {
  AboutMeComponent,
  ExperienceComponent,
  HeaderComponent,
  IntroductionComponent,
  PortfolioSectionComponent,
} from "../../components/index";
import "./home.css";

const Home = () => {
  return (
    <div className="homePage">
      <HeaderComponent />
      <IntroductionComponent className="about-content" />
      <AboutMeComponent className="about-me-container" />
      <ExperienceComponent className="experience-container" />
      <PortfolioSectionComponent className="portfolio-container" />
    </div>
  );
};

export default Home;
