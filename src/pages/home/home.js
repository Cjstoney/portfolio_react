import React from "react";
import Introduction from "../../components/introduction/introduction";
import AboutMe from "../../components/about/aboutMe";
import "./home.css";

const Home = () => {
  return (
    <div className="homePage">
      <Introduction className="about-content" />
      <AboutMe className="about-me-container" />
    </div>
  );
};

export default Home;
