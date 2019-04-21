

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import { 
    PageHomeComponent, 
    PagePacksComponent,

} from '../';

export class Container extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route path='/home' component={PageHomeComponent}/>
            <Route path='/personas/packs' component={PagePacksComponent}/>
        </Switch>
      </div>
    );
  }
}
