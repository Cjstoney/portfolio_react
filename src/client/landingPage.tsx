import React from "react";
import { Link } from "react-router-dom";

class LandingPage extends React.Component {
  // state = {};
  render() {
    return (
      <div>
        <Link to="/webHome">web</Link>
      </div>
    );
  }
}

export default LandingPage;
