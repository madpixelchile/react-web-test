

import React, {Component, } from 'react'; //ReactDOM

import './FlowBoxComponent.scss'

export class FlowBoxComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            pageNumber: 0,
            baseNumber: [],
            activeState: '',
        }

        

    }

    nextPage = () =>{
        if(this.state.pageNumber < 5){
            this.setState({
                pageNumber: this.state.pageNumber + 1,
                
            });
        }
        this.toggleClass();
    }

    prevPage = () =>{
        if(this.state.pageNumber > 0){
            this.setState({
                pageNumber: this.state.pageNumber - 1,
            });
        }

        this.toggleClass();
    }

    toggleClass = ()=>{
        //sdfsd
    }


    render(){
        return(
            <div className="FlowBox">
                <h4>Flowbox {this.state.pageNumber}</h4>
                    
                        <div className="boxWrap">

                            <div className={`box box-1 active`}>
                                <p>
                                    <strong>{this.state.pageNumber}</strong>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </div>

                            <div className={`box box-2`}>
                                <strong>{this.state.pageNumber}</strong>
                                <p>
                                    n
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </div>

                            <div className={`box box-3`}>
                                <strong>{this.state.pageNumber}</strong>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi
                                </p>
                            </div>

                            <div className={`box box-4`}>
                                <strong>{this.state.pageNumber}</strong>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    Ut enim adillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </div>

                        </div>
    
                <button onClick={this.prevPage}> Page Number Prev </button>
                <button onClick={this.nextPage}> Page Number Next </button>
            </div>
        )
    }

}