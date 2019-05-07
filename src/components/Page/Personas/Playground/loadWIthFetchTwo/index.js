
import React, {Component} from 'react';


const jsonUrl = '/data/PlayGroundSelectData.json';

export class LoadWithFetchTwo extends Component{


    constructor(){
        super();

        this.state = {
            loadElements: null,
        }
       
    }

    componentDidMount(){

       setTimeout(()=>{

        fetch(jsonUrl).then((resolve)=>{
            return resolve.json();
        }).then((data)=>{

            this.setState({
                loadElements: data,
            });

        }).catch((error)=>{
            console.log(error + 'toke');
        });
        
       },1000);

    }

    render(){

        return(


            <div>
                <span className={`${!this.state.loadElements ? 'active' : ''} loading`} >CARGANDO</span>
                {
                    <div>
                        
                        {
                            this.state.loadElements && this.state.loadElements.map((obj,i)=>(
                                <span key={i}>{ obj.Datos.Nombre }</span>
                            ))
                        }
                    </div>
                }

                
            </div>

        );

    }

}