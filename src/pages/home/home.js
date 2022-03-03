import React from "react";
import Introduction from "../../components/introduction/introduction";
import "./home.css";

const Home = () => {
  return (
    <div className="homePage">
      <Introduction className="aboutSection" />
    </div>
  );
};

export default Home;
