
import React, {Component} from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll'

import {FlowBoxComponent} from './FlowBoxComponent/';

import {SelectComponent} from './SelectComponent/SelectComponent';

import {LoadWithFetchComponent} from './loadWithFetch/loadWithFetch';


export class PagePlaygroundComponent extends Component{

   render(){
        return(

            <div>
                

                <h5 id='ScrollMeHere'>This is a playground page</h5>

                <FlowBoxComponent/>

                <AnchorLink offset='100' href='#ScrollMeHere'>Anchor link test</AnchorLink>


                <div>

                    <h3>Select component Area</h3>

                    <SelectComponent />

                    <LoadWithFetchComponent/>


                </div>

            </div>

        )
   }


}