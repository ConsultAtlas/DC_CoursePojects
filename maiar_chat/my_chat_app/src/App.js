import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';

import './App.css';
import NavbarInstance from './Components/NavBar/NavBar';
import JumbotronInstance from './Components/Jumbotron/Jumbotron';
  
class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <div className="NavBar">
            <NavbarInstance />
          </div>
          <div className="Jumbo">
            <JumbotronInstance />
          </div>
          <div className="Footer">
            <p className="Centered">Maiar Consulting LLC - Copyright 2018</p>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
