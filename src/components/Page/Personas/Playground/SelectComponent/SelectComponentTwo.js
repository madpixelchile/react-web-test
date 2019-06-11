

import React, {Component} from 'react';


export class SelectComponentTwo extends Component{


    constructor(){
        super();

        this.state = {
            loadData: null,
        }

    }

    componentDidMount(){

        fetch('./data/PlayGroundSelectDataTwo.json').then( resolve =>{
            return resolve.json();
        }).then( data =>{

            this.setState({
                loadData: data,
            });

            console.log(this.state.loadData);
            // debugger;

        }).catch( error =>{
            console.log(error + 'error qlo');
        });

    }

    render(){

        const loadedDataGroup = this.state.loadData;

        return(

            <div>

                {

                    loadedDataGroup ?

                        loadedDataGroup[0].Users.map((obj, i)=>(
                            
                            <p key={i}>{obj.User.Name}</p>
                            
                        ))

                    : ''

                }

                {
                    loadedDataGroup ?

                        loadedDataGroup[0].Users[0].User.Skills.map((obj, i)=>(
                            
                            <p key={i}>{obj}</p>
                            
                        ))

                    : ''
                }

            </div>

        );
    }


}