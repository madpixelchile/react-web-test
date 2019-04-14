
import React, { Component } from 'react';

export class SliderPromoUno extends Component{

    // constructor(props){
    //     super(props);
    // }

    render(){
        return(

            <div className="sliderPromoUno">

                <div className="container">
                    <div className="col-xs-12">
                        <div className="slideCont">
                            <div className="textArea">
                                <h1>
                                    <span className="textArea__bigText">Mega 200</span>
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