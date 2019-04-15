

import React, {Component} from 'react';

import {ButtonComponent} from './../../Button/Button';

import SimpleSlider from './../../Slider/SliderHome/SliderHome';

import './../../Slider/SliderHome/sliderHome.scss';

export class PageHomeComponent extends Component{

    render(){
        return(

            
            <div className="mainContent">

                <SimpleSlider />
                
    
                pagina
    
                <ButtonComponent className="boton-1" buttonText="Haz click aquí" buttonAction={'modal'} />
    
            
            </div>
    
        ); 
    }   

}
