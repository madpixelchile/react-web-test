

import React, {Component} from 'react';

import ModalExample from "./../../../Modal/Modal";

import SimpleSlider from './../../../BaseComponents/Slider/SliderHome/SliderHome';
import {HomeTenderGrid} from './../../../BaseComponents/HomeTenderGrid/HomeTenderGrid';

import gridSquareTopLeftImg from './../../../BaseComponents/HomeTenderGrid/img/C01-S10-DK.jpg';
// import gridSquareTopLeftMobile from './../../../BaseComponents/HomeTenderGrid/img/C01-S10-MB.jpg';

import gridSquareTopRightImg from './../../../BaseComponents/HomeTenderGrid/img/c02-bandaancha-dk.png';
import gridSquareBottomLeftImg from './../../../BaseComponents/HomeTenderGrid/img/C03-iPhone6S-DK.png';
import gridSquareBottomCenterImg from './../../../BaseComponents/HomeTenderGrid/img/c04-negocios2-dk-1.png';
import gridSquareBottomRightImg from './../../../BaseComponents/HomeTenderGrid/img/C05-GOT-DK.png';

export class PageHomeComponent extends Component{

    render(){
        return(
            
            <div className="mainContent">
                
                <ModalExample modalContent={'ModalDos'}/>

                <SimpleSlider />
                
                <div className="container-fluid">

                    <div className="row small-gutter">

                        <div className="col-md-6">
                            <HomeTenderGrid 
                                gridSquareDirection={'homeTenderBox__top homeTenderBox__top--left'} 
                                gridSquareImg={gridSquareTopLeftImg}
                                // gridSquareImgMobile={gridSquareTopLeftMobile}
                                goToUrl={'./'}
                                TitleUrl={'Enlace a la sección Uno'}
                            />
                        </div>
                        <div className="col-md-6">
                            <HomeTenderGrid 
                                gridSquareDirection={'homeTenderBox__top homeTenderBox__top--right'}
                                gridSquareImg={gridSquareTopRightImg}
                                goToUrl={'./'}
                                TitleUrl={'Enlace a la sección Dos'}
                             />
                        </div>
                        <div className="col-lg-five-2 col-md-4 col-xs-12">
                            <HomeTenderGrid 
                                gridSquareDirection={'homeTenderBox__bottom homeTenderBox__bottom--left'} 
                                gridSquareImg={gridSquareBottomLeftImg}
                                goToUrl={'./'}
                                TitleUrl={'Enlace a la sección Tres'}
                            />    
                        </div>
                        <div className="col-lg-five-1 col-md-4 col-xs-12">
                            <HomeTenderGrid 
                                gridSquareDirection={'homeTenderBox__bottom homeTenderBox__bottom--center'} 
                                gridSquareImg={gridSquareBottomCenterImg}
                                goToUrl={'./'}
                                TitleUrl={'Enlace a la sección Cuatro'}
                            />    
                        </div>
                        <div className="col-lg-five-2 col-md-4 col-xs-12">
                            <HomeTenderGrid 
                                gridSquareDirection={'homeTenderBox__bottom homeTenderBox__bottom--right'} 
                                gridSquareImg={gridSquareBottomRightImg}
                                goToUrl={'./'}
                                TitleUrl={'Enlace a la sección Cinco'}
                            />    
                        </div>

                    </div>

                </div>
                
    
                <ModalExample modalContent={'ModalUno'} classToToggle={'active'}/>

            </div>
    
        ); 
    }   
    
}
