import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

class LandingPage extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <BrowserRouter>
          <Link to="/web">web</Link>
          <Link to="/wood">wood</Link>
          <Link to="/art">art</Link>
        </BrowserRouter>
      </div>
    );
  }
}

export default LandingPage;
