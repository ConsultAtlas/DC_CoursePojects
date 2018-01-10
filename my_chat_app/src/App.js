import React, { Component } from 'react';

import './App.css';
import NavbarInstance from './Components/NavBar/NavBar';
import JumbotronInstance from './Components/Jumbotron/Jumbotron';
  
class App extends Component {
  
  render() {
    return (
      
      <div>
        <NavbarInstance />
        <JumbotronInstance />
        <div>
        <p className="Centered">Maiar Consulting LLC - Copyright 2018</p>
      </div>
      </div>
    );
  }
}

export default App;
