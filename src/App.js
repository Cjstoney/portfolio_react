import React from 'react';
import Navbar from "./components/navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Contact from './pages/contact'
import cards from './cards.json'

class App extends React.Component {
  state = {
    cards
  }

  render() {
    return (
      <BrowserRouter>
     
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/portfolio' render={this.state.cards.map = (props) => {
          return(<Portfolio
            id={props.id}
            key={props.id}
            name={props.projName}
            image={props.img} 
            url={props.URL}/>
          )
        }}
             isAuthed={true}

        />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        
      </BrowserRouter>

    );
  }
}

export default App;
