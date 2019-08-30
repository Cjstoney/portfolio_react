import React from 'react';
import Navbar from "./components/navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Contact from './pages/contact'

function App() {
  return (
    <BrowserRouter>
        <Navbar />
          <Route  exact path='/' component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />

    </BrowserRouter>
  );
}

export default App;
