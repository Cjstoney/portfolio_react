import React, { useState, useEffect } from "react";
import "./home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div id="landing-section">
          {/* <figure id='thumbnail'>
                <img id='woodsImage' alt='woods' src='../../images/woods2_copy.png'></img>
            </figure> */}
          <div className="text-container">
            <p className="static-text">Hi, I'm Camerone</p>
          </div>
          <div id="overlay"></div>
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
