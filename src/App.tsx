import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import WebHome from "./web/webHome";
import LandingPage from "./landingPage";

class App extends React.Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Route exactPath="/" component={LandingPage} />
        <Route path="/web" component={WebHome} />
      </BrowserRouter>
    );
  }
}

export default App;
