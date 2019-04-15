

import React, { Component } from 'react';

import './SliderPromoDos-2019-04-15.scss';

//Date: 13/04/2019 Name: Promo dos

class SliderPromoDos extends Component{
    
        // constructor(props){
        //     super(props);
        // }
    
        render(){
            return(
    
                <div className="slider__promo--dos">
    
                    <div className="container">
                        <div className="col-xs-12">
                            <div className="slideCont">
                                <div className="textArea">
                                    <h1>
                                        <span className="textArea__bigText">Mega 200 Promo 2</span>
                                        <span className="textArea__midText"> + 70 canales</span>
                                        {/* <span className="textArea__smallText"></span> */}
                                    </h1>
                                </div>
                                <div className="graphicArea">
                                    {/* <img className="product" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* <img className="sliderBackground" /> */}
    
                </div>
    
            );
        }
    
    }

export default SliderPromoDos;