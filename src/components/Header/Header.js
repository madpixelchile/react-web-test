import React, { Component } from 'react';

import './header.scss';

import { NavBar } from './HeaderNavBar';

import { TopNavComponent } from './HeaderTopNav'

export class PrimaryHeaderComponent extends Component {

    render(){
        return(
            
            <header className="header header--primary">
    
                <TopNavComponent/>
    
                <NavBar/>
            
            </header>
    
        ); 
    }   

}
