

import React, {Component} from 'react';

import {ButtonComponent} from './../../Button/Button';

import SimpleSlider from './../../Slider/mainSlider';
import ModalComponent from './../../Modal/Modal';

// import MyVerticallyCenteredModal from './../../Modal/Modal';

import './../../Slider/sliderHome.scss';
import { SliderPromoDos } from '../../Slider/Slides/Slides';

export class PageHomeComponent extends Component{

    render(){
        return(
            
            <div className="mainContent">

                <SimpleSlider />
    
                pagina
    
                <ButtonComponent className="boton-1" buttonText="Haz click aquí" buttonAction={'modal'} />

                <ModalComponent nombre={'string equis'} srcFoto={'https://lh3.googleusercontent.com/jStdbpV-tkijCPZqN1EcenHAhevMbflc_HZ_wPNWLwN7qGKaW_DUJQ1NfD7dFx2OLTzJ8oyD=w128-h128-e365'} />
                <SliderPromoDos />
            
            </div>
    
        ); 
    }   
    

}
