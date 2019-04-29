

import React, {Component} from'react';

import axios from 'axios';

export class SelectComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            SelectComponentInfo: [],
            selectValue: '',
        }

    }


    componentWillMount() {
        axios.get('./data/PlayGroundSelectData.json') // JSON File Path
        .then( response => {
            this.setState({
                SelectComponentInfo: response.data,
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    loadSelectResults = (e)=>{
        this.setState({
            
            selectValue: e.target.value,

        });
    }

    render(){

        

        console.log(this.state.selectValue);
        
        const SelectComponentInfoLoaded = this.state.SelectComponentInfo;

        // const PrimarySelectedValue = this.state.selectValue;

        return(

            <div>
                <select value={this.state.selectValue} onChange={this.loadSelectResults} >

                    {
                        SelectComponentInfoLoaded && SelectComponentInfoLoaded.map((SelectComponentInfo, i) =>(
                                <option value={SelectComponentInfo.Nombre} key={i}>{SelectComponentInfo.Nombre}</option>
                            )
                        )
                    } 

                </select>
                
                <select>
                    {
                        SelectComponentInfoLoaded && SelectComponentInfoLoaded.map((SelectComponentInfo, i) =>(
                                <option value={SelectComponentInfo.Nombre} key={i}>{SelectComponentInfo.Nombre}</option>
                            )
                        )
                    } 
                </select>

            </div>

        );
    }


}