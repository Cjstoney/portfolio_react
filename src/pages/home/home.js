import React, { useEffect, useState } from "react";
import {
  AboutMeComponent,
  ExperienceComponent,
  HeaderComponent,
  IntroductionComponent,
  MobileHeaderComponent,
  PortfolioSectionComponent,
} from "../../components/index";
import "./home.css";

const Home = ({ width }) => {
  const [screenWidth, setScreenWidth] = useState(width);
  useEffect(() => {
    if (screenWidth !== width) {
      setScreenWidth(width);
    }
  }, [width, screenWidth]);
  return (
    <div className="homePage">
      {width > 870 ? (
        <HeaderComponent className="header-container" />
      ) : (
        <MobileHeaderComponent className="mobile-header-container" />
      )}
      <IntroductionComponent className="about-content" />
      <AboutMeComponent className="about-me-container" />
      <ExperienceComponent className="experience-container" />
      <PortfolioSectionComponent className="portfolio-container" />
    </div>
  );
};

export default Home;
