import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import Contact from "./pages/contact";

class WebHome extends React.Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/web" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route exact path="/web" component={About} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    );
  }
}

export default WebHome;
