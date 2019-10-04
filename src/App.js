import React from 'react';
import Navbar from "./components/navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Contact from './pages/contact'

class App extends React.Component {
  state = {
  }

  render() {
    return (
      <BrowserRouter>
     
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/portfolio' component={Portfolio}/>
        <Route exact path='/' component={About} />
        <Route path='/contact' component={Contact} />
        
      </BrowserRouter>

    );
  }
}

export default App;
