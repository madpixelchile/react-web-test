import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'

import { 
    PageHomeComponent, 
    PagePacksComponent,
    PageError404Component,
    
} from '../';

export class Container extends Component {
  render() {

    const badUrlList = !Route.path;

    return (
      <div>
        <Switch>
            <Route exact path='/' component={PageHomeComponent} />
            <Route path="/home" component={PageHomeComponent}/>
            <Route path='/personas/packs' component={PagePacksComponent}/>
            <Route path='/404' component={PageError404Component}/>
            <Redirect from={badUrlList} to="/404" />
        </Switch>
      </div>
    );
  }
}