
import React, {Component} from 'react';

import {PagoExpressComponent} from './PagoExpressArea';
import {LoginComponent} from './LoginArea';

import './HeaderUserAccessComponent.scss'

export class HeaderUserAccessComponent extends Component{

    render(){
        return(

            <div className="accessArea">

                <PagoExpressComponent/>
                <LoginComponent/>

            </div>

        )
    }

}