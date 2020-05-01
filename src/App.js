import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import WebHome from "./web/webHome";

class App extends React.Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Route path="/web" component={WebHome} />
      </BrowserRouter>
    );
  }
}

export default App;
