import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";

class LandingPage extends React.Component {
  // state = {};
  render() {
    return (
      <div className="landing-page-containter">
        <Link id="webHome" className="landingPage-link" to="/webHome">
          Web
        </Link>
        <Link id="woodHome" className="landingPage-link" to="/woodHome">
          Wood
        </Link>
        <Link id="artHome" className="landingPage-link" to="/artHome">
          Art
        </Link>
      </div>
    );
  }
}

export default LandingPage;
