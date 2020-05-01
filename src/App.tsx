import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import WebHome from "./client/portfolioTypes/web/webHome";
import LandingPage from "./client/landingPage";
import Portfolio from "./client/portfolioTypes/web/pages/portfolio";
import Contact from "./client/portfolioTypes/web/pages/contact";
import { RouteDefs } from "./Routes";
// import {RouteDefs } from './Routes'

const { WEB_CONTACT } = RouteDefs;

class App extends React.Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Route exactPath="/" component={LandingPage} />
        <Route path="/webHome" component={WebHome} />
        <Route path="/webPortfolio" component={Portfolio} />
        <Route path="/webContact" component={Contact} />
      </BrowserRouter>
    );
  }
}

export default App;
