import React, { Component } from 'react';
import { Route, Switch, } from 'react-router-dom' //Redirect

import { 
    PageHomeComponent, 
    PagePacksComponent,
    PageError404Component,
    PagePlaygroundComponent,
    
} from '../';

export class Container extends Component {
  render() {

    // const badUrlList = !Route.path;

    return (
      <div>
        <Switch>
            <Route exact path='/' component={PageHomeComponent} />
            <Route path="/home" component={PageHomeComponent}/>
            <Route path='/personas/packs' component={PagePacksComponent}/>
            <Route path='/404' component={PageError404Component}/>
            <Route path='/playground' component={PagePlaygroundComponent} />
            {/* <Redirect from={badUrlList} to="/404" /> */}
        </Switch>
      </div>
    );
  }
}