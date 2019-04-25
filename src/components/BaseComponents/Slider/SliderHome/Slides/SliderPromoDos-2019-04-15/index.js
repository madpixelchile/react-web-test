

import React, { Component } from 'react';

import './SliderPromoDos-2019-04-15.scss';

//Slider load img resources
import ProductImg from './img/example-slide-img.png';
import ProductImgMobile from './img/example-slide-mobile-img.png';

import BannerBg from './img/example-slider-bg-img.jpg';
//Slider load img resources


//Date: 13/04/2019 Name: Promo dos

class SliderPromoDos extends Component{
    
        constructor(props){
            super(props);

            this.setButtonAction = this.setButtonAction.bind(this);

            this.state = {
                stateOne: 'nothing'
            }
        }

        setButtonAction = () =>{
            this.setState({
                stateOne: 'this button has been pressed 2'
            });
        }
    
        render(){

            // console.log(this.state.stateOne);
    
            return(
    
                <div className="slider__promo slider__promo--dos" style={{ backgroundImage: "url(" + BannerBg + ")" }} >
    
                    <div className="container">
                        <div className="col-xs-12">
                            <div className="slider__promo--dos__slideCont">
    
    
                                <div className="textArea">
                                    <h1>
                                        <span className="textArea__text textArea__text--big">Mega 250</span>
                                        <span className="textArea__text textArea__text--mid"> + 80 canales</span>
                                        {/* <span className="textArea__smallText"></span> */}
                                    </h1>
                                    <img className="product only-md" src={ProductImgMobile} alt="Producto"/>
                                    <button id="2" className="btn btn--primary" onClick={this.setButtonAction}>¡Lo quiero 2! {this.state.stateOne}</button>
                                </div>
    
    
                                <div className="graphicArea">
                                    <img className="product not-md" src={ProductImg} alt="Producto"/>
                                </div>
                            </div>
                        </div>
                    </div>
    
    
                </div>
    
            );
    
            
        }
    
    }

export default SliderPromoDos;