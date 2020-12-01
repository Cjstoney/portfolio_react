import React from "react";
import Navbar from "./components/parts/navbar/navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Portfolio from "./pages/portfolio/portfolio";
import Contact from "./pages/contact/contact";

class App extends React.Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    );
  }
}

export default App;
