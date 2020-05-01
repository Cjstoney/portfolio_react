import React from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";
import WebHome from "./portfolioTypes/web/webHome";

class LandingPage extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/web" compontent={WebHome} />
          {/* <Route path="/wood" component={WoodHome}> */}
          {/* <Route path="/art" component={ArtHome}> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default LandingPage;
