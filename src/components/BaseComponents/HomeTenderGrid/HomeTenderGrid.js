import React, {Component} from 'react';

import './homeTenderGrid.scss';

export class HomeTenderGrid extends Component{

    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <div className={`${this.props.gridSquareDirection} homeTenderBox`} style={{ backgroundImage: "url(" + this.props.gridSquareImg + ")" }}>
                <a href={this.props.goToUrl}></a>
                {/* <div className="not-md" ></div> */}
                {/* <div className="only-md" style={{ backgroundImage: "url(" + this.props.gridSquareImgMobile + ")" }}></div> */}
            </div>
        )
    }

}

