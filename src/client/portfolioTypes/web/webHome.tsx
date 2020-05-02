import React from "react";
import Home from "./pages/home";
import About from "./pages/about";

class WebHome extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    );
  }
}

export default WebHome;
