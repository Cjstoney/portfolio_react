import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Portfolio from "./pages/portfolio/portfolio";
import Contact from "./pages/contact/contact";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/parts/navbar/navbar";

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Route exact path="/" component={App} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/contact" component={Contact} />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
