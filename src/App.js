import React from "react";
import Home from "./pages/home/home";
// import Construction from "./pages/construction/construction";

class App extends React.Component {
  state = {
    scrollY: 0,
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
