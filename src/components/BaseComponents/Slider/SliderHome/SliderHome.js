import React, { Component } from "react";
import Slider from "react-slick";

import './../slickSlider.scss';

import './sliderHome.scss';

import SliderPromoUno from './Slides/SliderPromoUno-2019-04-15/';
import SliderPromoDos from './Slides/SliderPromoDos-2019-04-15/';
import SliderPromoTres from './Slides/SliderPromoTres-2019-04-15/';

//Home main slider
export default class SimpleSlider extends Component {
  render() {

    const settings = {

      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      customPaging: function(i) {

        const buttonNames = [
          'Ofertas Hogar Abril',
          'Galaxy J4 Plus',
          'Ofertas Negocios Abril'
        ];

        return (
            <button><span>{buttonNames[i]}</span></button>
        );
      },
    };
    return (
      <div className="slider slider--home">
        <Slider {...settings}>
          <div>
            {/* <SliderPromoUno products={this.state.data}/> */}
            <SliderPromoUno />
          </div>
          <div>
            <SliderPromoDos />
          </div>
          <div>
          <SliderPromoTres />
          </div>
        </Slider>
      </div>
    );
  }
}

//Product detail main slider