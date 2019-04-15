
import React, { Component } from 'react';

// const ButtonComponentProps = {
//     buttonText,
//     buttonAction
// }

export class ButtonComponent extends Component{

    constructor(props){
        super(props);

        // if(buttonAction === 'modal')
        //     console.log('modal');
        // else
        //     console.log('otra wea');
        
        this.state = {
            buttonTextOne: this.buttonText,
        }
    }

    render(){
        
        return(
            
            <button>{this.buttonTextOne}</button>
    
        ); 
    }   

}
