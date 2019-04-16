
import React, { Component } from 'react';

import './SliderPromoUno-2019-04-15.scss';

//Slider load img resources
import ProductImg from './img/example-slide-img.png';
import ProductImgMobile from './img/example-slide-mobile-img.png';

import BannerBg from './img/example-slider-bg-img.jpg';
//Slider load img resources

//Date: 13/04/2019 Name: Promo uno
import React from 'react'

setButtonAction = (id) => {
    setSlider(id)
}
export default function SliderPromo({products}) {

    const [slider, setSlider] = useState('')
  return (
    <div>
        {products.map(product => {
            <div className="slider__promo slider__promo--uno" style={{ backgroundImage: "url(" + BannerBg + ")" }} >

<div className="container">
    <div className="col-xs-12">
        <div className="slider__promo--uno__slideCont">


            <div className="textArea">
                <h1>
                    <span className="textArea__text textArea__text--big">{product.title}</span>
                    <span className="textArea__text textArea__text--mid"> {product.canales}</span>
                    {/* <span className="textArea__smallText"></span> */}
                </h1>
                
                <img className="product only-md" src={ProductImgMobile} alt="Producto"/>

                <button className="btn btn--primary" onClick={this.setButtonAction(product.id)}>¡Lo quiero! {this.state.stateOneToke}</button>

            </div>


            <div className="graphicArea">
                <img className="product not-md" src={ProductImg} alt="Producto"/>
            </div>
        </div>
    </div>
</div>


</div>

})}
       
    </div>
  )
}
