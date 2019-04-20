

import React, {Component} from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';

import ModalExample from "src/components/Modal/Modal";

import ExampleTab from "src/components/Tab/Tabs";

import SimpleSlider from 'src/components/BaseComponents/Slider/SliderHome/SliderHome';
import {HomeTenderGrid} from 'src/components/BaseComponents/HomeTenderGrid/HomeTenderGrid';

// import gridSquareTopLeftImg from './../../../BaseComponents/HomeTenderGrid/img/C01-S10-DK.jpg';
// import gridSquareTopLeftMobile from './../../../BaseComponents/HomeTenderGrid/img/C01-S10-MB.jpg';

// import gridSquareTopRightImg from './../../../BaseComponents/HomeTenderGrid/img/c02-bandaancha-dk.png';
// import gridSquareTopRightImgMobile from './../../../BaseComponents/HomeTenderGrid/img/c02-bandaancha-mb-1.png';

// import gridSquareBottomLeftImg from './../../../BaseComponents/HomeTenderGrid/img/C03-iPhone6S-DK.png';

// import gridSquareBottomCenterImg from './../../../BaseComponents/HomeTenderGrid/img/c04-negocios2-dk-1.png';

// import gridSquareBottomRightImg from './../../../BaseComponents/HomeTenderGrid/img/C05-GOT-DK.png';

//making json better...

// import {
//     SquareTopLeftImg,
//     TopLeftMobileImg,
//     TopRightImg,
//     RightMobileImg,
//     BottomLeftImg,
// } from './../../../BaseComponents/HomeTenderGrid/HomeResources'

//making json better...

// import {HomeTenderGridPath} from './../../../BaseComponents/HomeTenderGrid/HomeResources';

// import * as imgBasePath from './../../../../BaseComponents/HomeTenderGrid/img/';

import HomeTenderGridData from 'src/components/BaseComponents/HomeTenderGrid/HomeResources.json';





export class PageHomeComponent extends Component{

    constructor(props){
        super(props);

        

        this.state = {
            imgPath: 'src/components/BaseComponents/HomeTenderGrid/img/',
        }
        
        
        
    }


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
                                gridSquareImg={require( 'src/components/BaseComponents/HomeTenderGrid/img/' + HomeTenderGridData[0].topLeftSquare.DeskImgUrl)} 
                                gridSquareImgMobile={require('src/components/BaseComponents/HomeTenderGrid/img/' + HomeTenderGridData[0].topLeftSquare.MobileImgUrl)}
                                gridButtonTitle = {HomeTenderGridData[0].topLeftSquare.LinkTitle}
                                goToUrl={'#;'}
                            />
                        </div>
                        <div className="col-md-6">
                            <HomeTenderGrid 
                                gridSquareDirection={'homeTenderBox__top homeTenderBox__top--right'}
                                gridSquareImg={require('src/components/BaseComponents/HomeTenderGrid/img/' + HomeTenderGridData[0].topRightSquare.DeskImgUrl)}
                                gridSquareImgMobile={require('src/components/BaseComponents/HomeTenderGrid/img/' + HomeTenderGridData[0].topRightSquare.MobileImgUrl)}
                                goToUrl={'#;'}
                             />
                        </div>
                        <div className="col-lg-five-2 col-md-4 col-xs-12">
                            <HomeTenderGrid 
                                gridSquareDirection={'homeTenderBox__bottom homeTenderBox__bottom--left'} 
                                // gridSquareImg={BottomLeftImg}
                                goToUrl={'#;'}
                            />    
                        </div>
                        <div className="col-lg-five-1 col-md-4 col-xs-12">
                            <HomeTenderGrid 
                                gridSquareDirection={'homeTenderBox__bottom homeTenderBox__bottom--center'} 
                                // gridSquareImg={gridSquareBottomCenterImg}
                                goToUrl={'#;'}
                            />    
                        </div>
                        <div className="col-lg-five-2 col-md-4 col-xs-12">
                            <HomeTenderGrid 
                                gridSquareDirection={'homeTenderBox__bottom homeTenderBox__bottom--right'} 
                                // gridSquareImg={gridSquareBottomRightImg}
                                goToUrl={'#;'}
                            />    
                        </div>

                    </div>

                </div>
                
    
                <ModalExample modalContent={'ModalUno'} classToToggle={'active'}/>

                <ExampleTab classToToggle={'show'}/>

            </div>
    
        ); 
    }   
    
}
