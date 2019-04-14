import React, { Component } from "react";
import Slider from "react-slick";
import './slickSlider.scss';

import { SliderPromoUno, SliderPromoDos } from './Slides/Slides';

//Home main slider
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true
    };
    return (
      <div className="sliderHome">
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <div>
            
            <SliderPromoUno />

          </div>
          <div>
            <SliderPromoDos />
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

//Product detail main slider