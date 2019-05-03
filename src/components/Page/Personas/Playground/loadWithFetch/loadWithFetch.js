

import React, {Component} from 'react';


const jsonUrl = '/data/PlayGroundSelectData.json';

export class LoadWithFetchComponent extends Component{

    constructor(){
        super();
        this.state = {
            allInfo: [],
        }
    }
    

    handleUpdateClick = () =>{

        fetch(jsonUrl).then(resolve =>{
            return resolve.json();

        }).then(data =>{
            console.log(data);

            this.setState({
                allInfo: data,
            });

        });
    }

    render(){

        const allInfoLoaded = this.state.allInfo;

        return(
            <div>

                {
                   allInfoLoaded.map((obj, i) =>(
                        <span key={i}>{`Nombre: ${obj.Datos.Nombre} - Edad ${obj.Datos.Edad} - Sexo ${obj.Datos.Sexo}`}</span>
                    ))
                }

                <button onClick={this.handleUpdateClick}>actualizar</button>
            </div>
        );
    }


}