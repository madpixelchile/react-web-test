import React, { Component } from 'react';
// import logo from './logo.svg';
import './styles/main.scss';

import {PrimaryHeaderComponent} from './components/Header/Header';
import {PrimaryFooterComponent} from './components/Footer/Footer';

import {PageHomeComponent} from './components/Page/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PrimaryHeaderComponent />
        <PageHomeComponent />
        <PrimaryFooterComponent />
      </div>
    );
  }
}

export default App;
