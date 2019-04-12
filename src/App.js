import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import {HeaderComponent} from './components/Header/Header';
import {FooterComponent} from './components/Footer/Footer';

import {PageHomeComponent} from './components/Page/PageHome/PageHome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <PageHomeComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
