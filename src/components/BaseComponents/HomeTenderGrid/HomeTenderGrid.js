import React, {Component} from 'react';

import './homeTenderGrid.scss';

import './HomeResources.json';

export class HomeTenderGrid extends Component{

    render(){
        return(
            <div className={`${this.props.gridSquareDirection} homeTenderBox`} >
                <a href={this.props.goToUrl} title={this.props.gridButtonTitle}>&nbsp;</a>
                <div className="imgBox not-md" style={{ backgroundImage: "url(" + this.props.gridSquareImg + ")" }}></div>
                <div className="imgBox only-md" style={{ backgroundImage: "url(" + this.props.gridSquareImgMobile + ")" }}></div>
            </div>
        )
    }

}

