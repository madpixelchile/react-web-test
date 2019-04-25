
import React, {Component} from 'react';

import Slider from "react-slick";

export default class ModalSlider extends Component {
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
            'Uno',
            'Dos',
            'Tres'
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
              <p>Toke 1</p>
            </div>
            <div>
                <p>Toke 2</p>
            </div>
            <div>
                <p>Toke 3</p>
            </div>
          </Slider>
        </div>
      );
    }
  }