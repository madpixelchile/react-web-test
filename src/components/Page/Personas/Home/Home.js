

import React, {Component} from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';

import ModalExample from "src/components/Modal/Modal";

import ExampleTab from "src/components/Tab/Tabs";

import SimpleSlider from 'src/components/BaseComponents/Slider/SliderHome/SliderHome';
import {HomeTenderGrid} from 'src/components/BaseComponents/HomeTenderGrid/HomeTenderGrid';

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
                                gridSquareDirection = {'homeTenderBox__top homeTenderBox__top--left'} 
                                gridSquareImg       = {require( 'src/components/BaseComponents/HomeTenderGrid/img/' + HomeTenderGridData[0].topLeftSquare.DeskImgUrl)} 
                                gridSquareImgMobile = {require('src/components/BaseComponents/HomeTenderGrid/img/'  + HomeTenderGridData[0].topLeftSquare.MobileImgUrl)}
                                gridSquareImgAlt    = {HomeTenderGridData[0].topLeftSquare.MobileImgUrl}
                                gridButtonTitle     = {HomeTenderGridData[0].topLeftSquare.LinkTitle}
                                goToUrl={'#;'}
                            />
                        </div>
                        <div className="col-md-6">
                            <HomeTenderGrid 
                                gridSquareDirection = {'homeTenderBox__top homeTenderBox__top--right'}
                                gridSquareImg       = {require('src/components/BaseComponents/HomeTenderGrid/img/' + HomeTenderGridData[0].topRightSquare.DeskImgUrl)}
                                gridSquareImgMobile = {require('src/components/BaseComponents/HomeTenderGrid/img/' + HomeTenderGridData[0].topRightSquare.MobileImgUrl)}
                                gridSquareImgAlt    = {HomeTenderGridData[0].topRightSquare.MobileImgUrl}
                                gridButtonTitle     = {HomeTenderGridData[0].topRightSquare.LinkTitle}
                                goToUrl={'#;'}
                             />
                        </div>
                        <div className="col-lg-five-2 col-md-4 col-xs-12">
                            <HomeTenderGrid 
                                gridSquareDirection={'homeTenderBox__bottom homeTenderBox__bottom--left'} 
                                gridSquareImg       = {require('src/components/BaseComponents/HomeTenderGrid/img/' + HomeTenderGridData[0].bottomLeftSquare.DeskImgUrl)}
                                gridSquareImgMobile = {require('src/components/BaseComponents/HomeTenderGrid/img/' + HomeTenderGridData[0].bottomLeftSquare.MobileImgUrl)}
                                gridSquareImgAlt    = {HomeTenderGridData[0].bottomLeftSquare.MobileImgUrl}
                                gridButtonTitle     = {HomeTenderGridData[0].bottomLeftSquare.LinkTitle}
                                goToUrl={'#;'}
                            />    
                        </div>
                        <div className="col-lg-five-1 col-md-4 col-xs-12">
                            <HomeTenderGrid 
                                gridSquareDirection={'homeTenderBox__bottom homeTenderBox__bottom--center'} 
                                gridSquareImg       = {require('src/components/BaseComponents/HomeTenderGrid/img/' + HomeTenderGridData[0].bottomCenterSquare.DeskImgUrl)}
                                gridSquareImgMobile = {require('src/components/BaseComponents/HomeTenderGrid/img/' + HomeTenderGridData[0].bottomCenterSquare.MobileImgUrl)}
                                gridSquareImgAlt    = {HomeTenderGridData[0].bottomCenterSquare.MobileImgUrl}
                                gridButtonTitle     = {HomeTenderGridData[0].bottomCenterSquare.LinkTitle}
                                goToUrl={'#;'}
                            />    
                        </div>
                        <div className="col-lg-five-2 col-md-4 col-xs-12">
                            <HomeTenderGrid 
                                gridSquareDirection={'homeTenderBox__bottom homeTenderBox__bottom--right'} 
                                gridSquareImg       = {require('src/components/BaseComponents/HomeTenderGrid/img/' + HomeTenderGridData[0].bottomRightSquare.DeskImgUrl)}
                                gridSquareImgMobile = {require('src/components/BaseComponents/HomeTenderGrid/img/' + HomeTenderGridData[0].bottomRightSquare.MobileImgUrl)}
                                gridSquareImgAlt    = {HomeTenderGridData[0].bottomRightSquare.MobileImgUrl}
                                gridButtonTitle     = {HomeTenderGridData[0].bottomRightSquare.LinkTitle}
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
