
import React, {Component} from 'react';

import './LoginArea.scss'

export class LoginComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            toggleDeploy: false,
        }

    }

    toggleDeployAction = (e) =>{
        
        // if(this.node.contains(e.target)){ 
            this.setState({
                toggleDeploy: !this.state.toggleDeploy,
            });
        // }

        // this.toggleDeployClose();
    }

    // toggleDeployClose(e){
    //     this.setState({
    //         toggleDeploy: false,
    //     });
    // }

    render(){


        return(
            
            <div className={`${this.state.toggleDeploy ? 'active' : ''} loginArea` } >
                <a className="deployButton" onClick={ this.toggleDeployAction} href="#;" >Login</a>   

                <div className="deployArea">

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                
                </div>

            </div>

        )
    }

}