

import React, {Component, } from 'react'; //ReactDOM

import axios from 'axios';


import {FlowBoxStructure, } from './FlowBoxStructure';


import './FlowBoxComponent.scss'

export class FlowBoxComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            pageNumber: 0,
            baseNumber: [],
            activeState: '',
            flowBoxInfo: [],
        }

        this.FlowBoxStructure = React.createRef();

    }

    componentWillMount() {
        axios.get('./data/PlayGroundData.json') // JSON File Path
        .then( response => {
            this.setState({
                flowBoxInfo: response.data
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    nextPage = () =>{
        if(this.state.pageNumber < 5){
            this.setState({
                pageNumber: this.state.pageNumber + 1,
                
            });

            this.FlowBoxStructure.current.updateState();

        }
        this.toggleClass();

    }

    prevPage = () =>{
        if(this.state.pageNumber > 0){
            this.setState({
                pageNumber: this.state.pageNumber - 1,
            });

            this.FlowBoxStructure.current.updateState();
        }

        this.toggleClass();
    }

    toggleClass = ()=>{
        
    }


    render(){

        const flowBoxContentLoaded = this.state.flowBoxInfo;

        // flowBoxContentLoaded.map(flowBoxInfo, index) => (
        //     // <FlowBoxStructure title={flowBoxContentLoaded.title} />
        //     console.log(flowBoxContentLoaded)
        // )

        return(
            <div className="FlowBox">
                <h4>Flowbox {this.state.pageNumber}</h4>

                {
                    flowBoxContentLoaded && flowBoxContentLoaded.map((flowBoxInfo, i)=>(
                        <FlowBoxStructure ref={this.FlowBoxStructure} itemPageCounter={this.state.pageNumber} itemNumberIndex={i} classType={`box box-${i}`} key={i} title={flowBoxInfo.title} content={flowBoxInfo.info} />
                    ))
                }

                <button onClick={this.prevPage}> Page Number Prev </button>
                <button onClick={this.nextPage}> Page Number Next </button>
            </div>
        )
    }

}