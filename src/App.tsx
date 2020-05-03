import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import WebHome from "./client/portfolioTypes/web/webHome";
import LandingPage from "./client/landingPage";
import Portfolio from "./client/portfolioTypes/web/pages/portfolio";
import Contact from "./client/portfolioTypes/web/pages/contact";
import ArtHome from "./client/portfolioTypes/art/artPages/artHome";

class App extends React.Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/webHome" component={WebHome} />
          <Route path="/webPortfolio" component={Portfolio} />
          <Route path="/webContact" component={Contact} />
          <Route path="/artHome" component={ArtHome} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
