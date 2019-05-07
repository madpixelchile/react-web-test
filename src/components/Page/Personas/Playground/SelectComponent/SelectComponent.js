

import React, {Component} from'react';

import axios from 'axios';

export class SelectComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            SelectComponentInfo: null,
            selectValue: '',
            nodeInitialState: 0,
        }

    }


    componentDidMount() {
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
            nodeInitialState: e.target.value,
        });
    }

    render(){

        // console.log(this.state.selectValue);
        
        const SelectComponentInfoLoaded = this.state.SelectComponentInfo;

        return(

            <div>
                <select value={this.state.selectValue} onChange={this.loadSelectResults} >

                    {
                        SelectComponentInfoLoaded && SelectComponentInfoLoaded.map((obj, i) =>(
                                <option value={i} key={i}>{obj.Datos.Nombre}</option>
                            )
                        )
                    } 

                </select>
                
                <select>
                       
                    {
                        SelectComponentInfoLoaded ? SelectComponentInfoLoaded[`${this.state.nodeInitialState}`].Datos.Juegos.Grupo.map((obj,i)=>(
                            <option key={i}>{obj}</option> 
                        ))
                        : ''
                    }
                        
                </select>

            </div>

        );
    }


}