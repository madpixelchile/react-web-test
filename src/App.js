import React, { Component } from 'react';
// import logo from './logo.svg';
import './styles/main.scss';

import {PrimaryHeaderComponent} from './components/Header/Header';
import {PrimaryFooterComponent} from './components/Footer/Footer';

// import {PageHomeComponent} from './components/Page/Personas/Home/Home';

import { Container } from './components/Page'; //Ver el problema estructural de la carga

class App extends Component {
  render() {
    return (
      <div className="App">
        <PrimaryHeaderComponent />
        <Container />
        {/* <PageHomeComponent/> */}
        <PrimaryFooterComponent />
      </div>
    );
  }
}

export default App;
