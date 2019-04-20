
import React from 'react';

import './SliderPromoUno-2019-04-15.scss';

//Slider load img resources
import ProductImg from './img/example-slide-img.png';
import ProductImgMobile from './img/example-slide-mobile-img.png';
import BannerBg from './img/example-slider-bg-img.jpg';
//Slider load img resources

//Date: 13/04/2019 Name: Promo uno

const SliderPromoUno = () => {

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

                                <a href="#;" id="1" className="btn btn--primary" title="Enlace a...">¡Lo quiero 1!</a>

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


export default SliderPromoUno;