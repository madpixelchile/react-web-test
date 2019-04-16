

import React, {Component} from 'react';

// import {ButtonComponent} from './../../Button/Button';

import ModalExample from "../../Modal/Modal";
import SimpleSlider from './../../BaseComponents/Slider/SliderHome/SliderHome';
// import HomeTenderGrid from './../../BaseComponents/HomeTenderGrid/HomeTenderGrid';

export class PageHomeComponent extends Component{

    render(){
        return(
            
            <div className="mainContent">

                <SimpleSlider />
                
                {/* <HomeTenderGrid /> */}
    
                {/* <ButtonComponent className="boton-1" buttonText="Haz click aquí" buttonAction={'modal'} /> */}
    
                <ModalExample/>
            </div>
    
        ); 
    }   
    

}
