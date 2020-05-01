import React from "react";
import Home from "./pages/home";
import About from "./pages/about";

class WebHome extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Home key="0" />
        <About key="1" />
      </div>
    );
  }
}

export default WebHome;
