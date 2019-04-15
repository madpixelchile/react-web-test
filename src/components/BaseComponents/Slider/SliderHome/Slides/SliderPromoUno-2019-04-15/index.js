
import React, { Component } from 'react';

import './SliderPromoUno-2019-04-15.scss';

//Slider load img resources
import ProductImg from './img/example-slide-img.png';
import BannerBg from './img/example-slider-bg-img.jpg';
//Slider load img resources

//Date: 13/04/2019 Name: Promo uno

class SliderPromoUno extends Component{

    constructor(props){
        super(props);

        this.state = {
            stateOne: 'nothing'
        }
    }

    setButtonAction = () =>{
        this.setState({
            stateOne: 'this button has been pressed'
        });
    }

    render(){

        console.log(this.state.stateOne); // console log test here, because in same function of change doesn't works... i don't know why :(

        return(

            <div className="slider__promo slider__promo--uno" style={{ backgroundImage: "url(" + BannerBg + ")" }} >

                <div className="container">
                    <div className="col-xs-12">
                        <div className="slider__promo--uno__slideCont">
                            <div className="textArea">
                                <h1>
                                    <span className="textArea__bigText">Mega 200</span>
                                    <span className="textArea__midText"> + 70 canales</span>
                                    {/* <span className="textArea__smallText"></span> */}
                                </h1>

                                <button className="btn" onClick={this.setButtonAction}>¡Lo quiero! {this.state.stateOne}</button>

                            </div>
                            <div className="graphicArea">
                                <img className="product" src={ProductImg} alt="Producto"/>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        );

        
    }
    

}


export default SliderPromoUno;