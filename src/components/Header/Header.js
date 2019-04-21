import React, { Component } from 'react';

import './header.scss';

import { NavBar } from './HeaderNavBar';

export class PrimaryHeaderComponent extends Component {

    render(){
        return(
            
            <header className="header header--primary">
    
                header
    
                <NavBar/>
            
            </header>
    
        ); 
    }   

}
