import React from 'react';
import Navbar from "./components/navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/home';
import Portfolio from './components/portfolio';
import About from './components/about';
import Contact from './components/contact'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* navbar component */}
        <Navbar />
          <Route  exact path='/' component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />

      </div>
    </BrowserRouter>
  );
}

export default App;
