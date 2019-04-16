
import React, { Component } from 'react';

import './SliderPromoUno-2019-04-15.scss';

//Slider load img resources
import ProductImg from './img/example-slide-img.png';
import ProductImgMobile from './img/example-slide-mobile-img.png';

import BannerBg from './img/example-slider-bg-img.jpg';
//Slider load img resources

//Date: 13/04/2019 Name: Promo uno

class SliderPromoUno extends Component{

    constructor(props){
        super(props);
        
        this.setButtonActionOne = this.setButtonActionOne.bind(this);

        this.state = {
            stateOneToke: 'nothing'
        }
    }

        setButtonActionOne = () =>{
            this.setState({
                stateOneToke: 'this button has been pressed 1'
            });
        }

    render(){

        console.log(this.state.stateOneToke); // console log test here, because in same function of change doesn't works... i don't know why :(

        return(

            <div className="slider__promo slider__promo--uno" style={{ backgroundImage: "url(" + BannerBg + ")" }} >

                <div className="container">
                    <div className="col-xs-12">
                        <div className="slider__promo--uno__slideCont">


                            <div className="textArea">
                                <h1>
                                    <span className="textArea__text textArea__text--big">Mega 200</span>
                                    <span className="textArea__text textArea__text--mid"> + 70 canales</span>
                                    {/* <span className="textArea__smallText"></span> */}
                                </h1>
                                
                                <img className="product only-md" src={ProductImgMobile} alt="Producto"/>

                                <button id="1" className="btn btn--primary" onClick={this.setButtonActionOne}>¡Lo quiero 1! {this.state.stateOneToke}</button>

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


export default SliderPromoUno;