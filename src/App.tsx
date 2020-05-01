import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import WebHome from "./client/portfolioTypes/web/webHome";
import LandingPage from "./client/landingPage";

class App extends React.Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Route exactPath="/" component={LandingPage} />
        <Route exactPath="/web" component={WebHome} />
      </BrowserRouter>
    );
  }
}

export default App;
