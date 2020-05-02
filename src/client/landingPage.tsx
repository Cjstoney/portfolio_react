import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";

class LandingPage extends React.Component {
  // state = {};
  render() {
    return (
      <div className="landing-page-containter">
        <Link id="webHome" className="landingPage-link" to="/webHome">
          <div id="webHomeContainer" className="link-containter">
            <span>Web</span>
          </div>
        </Link>
        <Link id="woodHome" className="landingPage-link" to="/woodHome">
          <div id="woodHomeContainer" className="link-containter">
            <span>Wood</span>
          </div>
        </Link>

        <Link id="artHome" className="landingPage-link" to="/artHome">
          <div id="artHomeContainer" className="link-containter">
            <span>Art</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default LandingPage;
