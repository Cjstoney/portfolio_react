import React from "react";
import Home from "./pages/home/home";

class App extends React.Component {
  state = {
    scrollY: 0,
  };

  handleScroll = (event) => {
    this.setState({ scrollY: window.scrollY });
    console.log(window.scrollY);
  };
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
