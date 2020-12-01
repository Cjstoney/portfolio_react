import React, { useState, useEffect } from "react";
import About from "../../components/details/about/about";
import "./home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div>
          <div id="landing-section">
            <div className="text-container">
              <p className="static-text">Hi, I'm Camerone</p>
            </div>
          </div>
          <About />
        </div>
      ) : (
        <div>
          <p>'Hello world'</p>
        </div>
      )}
    </>
  );
};

export default Home;
