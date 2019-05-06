

import React, {Component} from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';

import axios from 'axios';

import ModalExample from "src/components/Modal/Modal";

import ExampleTab from "src/components/Tab/Tabs";

import SimpleSlider from 'src/components/BaseComponents/Slider/SliderHome/SliderHome';
import {HomeTenderGrid} from 'src/components/BaseComponents/HomeTenderGrid/HomeTenderGrid';

// import HomeTenderGridData from 'src/components/BaseComponents/HomeTenderGrid/HomeResources.json';

export class PageHomeComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            imgPath: 'src/components/BaseComponents/HomeTenderGrid/img/',
            homeModuleInfo: []
        }

        axios.get('./data/HomeResources.json') // JSON File Path
        .then( response => {
            this.setState({
                homeModuleInfo: response.data
            });
        })
        .catch(function (error) {
            console.log(error);
        });

    }

    // componentWillMount() {
        //Deprecated
    // }

    render(){

        const homeModuleInfoLoaded = this.state.homeModuleInfo;
        // const imgGridPath = 'src/components/BaseComponents/HomeTenderGrid/img/';
        // console.log('without import axios:' + homeModuleInfoLoaded);
        // console.log('with import:' + HomeTenderGridData[0].topLeftSquare.DeskImgUrl);

        return( 
 
            <div className="mainContent">
                
                <ModalExample modalContent={'ModalDos'} modalStructure={'ModalOnlyText'} buttonText={'Abrir modal sólo texto'}/>

                <SimpleSlider/>
                
                {   
                    //Condicion que pregunta si la variable homeModuleInfoLoaded existe y además está llena muestrame lo siguiente:
                    // homeModuleInfoLoaded && homeModuleInfoLoaded.map((homeModuleInfo, index) => 

                    homeModuleInfoLoaded.map((homeModuleInfo, index) => 
                        (

                            <div key={index} className="container-fluid">
        
                                <div className="row small-gutter">
        
                                    <div className="col-md-6">
                                        <HomeTenderGrid
                                            gridSquareDirection = {'homeTenderBox__top homeTenderBox__top--left'} 
                                            gridSquareImg       = {require( 'src/components/BaseComponents/HomeTenderGrid/img/' + homeModuleInfo.topLeftSquare.DeskImgUrl)} 
                                            gridSquareImgMobile = {require('src/components/BaseComponents/HomeTenderGrid/img/'  + homeModuleInfo.topLeftSquare.MobileImgUrl)}
                                            gridSquareImgAlt    = {homeModuleInfo.topLeftSquare.MobileImgUrl}
                                            gridButtonTitle     = {homeModuleInfo.topLeftSquare.LinkTitle}
                                            goToUrl={'#;'}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <HomeTenderGrid 
                                            gridSquareDirection = {'homeTenderBox__top homeTenderBox__top--right'}
                                            gridSquareImg       = {require('src/components/BaseComponents/HomeTenderGrid/img/' + homeModuleInfo.topRightSquare.DeskImgUrl)}
                                            gridSquareImgMobile = {require('src/components/BaseComponents/HomeTenderGrid/img/' + homeModuleInfo.topRightSquare.MobileImgUrl)}
                                            gridSquareImgAlt    = {homeModuleInfo.topRightSquare.MobileImgUrl}
                                            gridButtonTitle     = {homeModuleInfo.topRightSquare.LinkTitle}
                                            goToUrl={'#;'}
                                        />
                                    </div>
                                    <div className="col-lg-five-2 col-md-4 col-xs-12">
                                        <HomeTenderGrid 
                                            gridSquareDirection={'homeTenderBox__bottom homeTenderBox__bottom--left'} 
                                            gridSquareImg       = {require('src/components/BaseComponents/HomeTenderGrid/img/' + homeModuleInfo.bottomLeftSquare.DeskImgUrl)}
                                            gridSquareImgMobile = {require('src/components/BaseComponents/HomeTenderGrid/img/' + homeModuleInfo.bottomLeftSquare.MobileImgUrl)}
                                            gridSquareImgAlt    = {homeModuleInfo.bottomLeftSquare.MobileImgUrl}
                                            gridButtonTitle     = {homeModuleInfo.bottomLeftSquare.LinkTitle}
                                            goToUrl={'#;'}
                                        />    
                                    </div>
                                    <div className="col-lg-five-1 col-md-4 col-xs-12">
                                        <HomeTenderGrid 
                                            gridSquareDirection={'homeTenderBox__bottom homeTenderBox__bottom--center'} 
                                            gridSquareImg       = {require('src/components/BaseComponents/HomeTenderGrid/img/' + homeModuleInfo.bottomCenterSquare.DeskImgUrl)}
                                            gridSquareImgMobile = {require('src/components/BaseComponents/HomeTenderGrid/img/' + homeModuleInfo.bottomCenterSquare.MobileImgUrl)}
                                            gridSquareImgAlt    = {homeModuleInfo.bottomCenterSquare.MobileImgUrl}
                                            gridButtonTitle     = {homeModuleInfo.bottomCenterSquare.LinkTitle}
                                            goToUrl={'#;'}
                                        />    
                                    </div>
                                    <div className="col-lg-five-2 col-md-4 col-xs-12">
                                        <HomeTenderGrid 
                                            gridSquareDirection={'homeTenderBox__bottom homeTenderBox__bottom--right'} 
                                            gridSquareImg       = {require('src/components/BaseComponents/HomeTenderGrid/img/' + homeModuleInfo.bottomRightSquare.DeskImgUrl)}
                                            gridSquareImgMobile = {require('src/components/BaseComponents/HomeTenderGrid/img/' + homeModuleInfo.bottomRightSquare.MobileImgUrl)}
                                            gridSquareImgAlt    = {homeModuleInfo.bottomRightSquare.MobileImgUrl}
                                            gridButtonTitle     = {homeModuleInfo.bottomRightSquare.LinkTitle}
                                            goToUrl={'#;'}
                                        />    
                                    </div>
        
                                </div>
        
                            </div>
                        ))
                }
                
                <ModalExample modalContent={'ModalUno'} classToToggle={'active'} buttonText={'Abrir modal C2C'} modalStructure={'ModalClickToCall'}/>

                <ModalExample modalStructure={'ModalSlider'} buttonText={'Abrir modal con slider'}/>

                <ExampleTab classToToggle={'show'}/>

            </div>
    
        ); 
    }   
    
}
