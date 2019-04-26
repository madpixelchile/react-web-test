
import React, {Component} from 'react';



export class FlowBoxStructure extends Component{

    constructor(props){
        super(props);

        this.state = {
            titleData: this.props.title,
            ContentData: this.props.content,
            ContentClass:  this.props.classType,
            itemNumber: this.props.itemNumberIndex,
            itemPageCounterNumber: 1,
        }

        console.log(this.state.itemNumber);

    }
    
    updateState = () => {
        this.setState({
            itemNumber: this.state.itemNumberIndex,
            itemPageCounterNumber: this.props.itemPageCounter,
        });
    }

    render(){
        console.log('entra funcion interna:' + this.state.itemPageCounterNumber);
        return(

            <div className={`infoArea ${this.state.ContentClass} ${this.state.itemPageCounterNumber === this.state.itemNumber ? 'active' : ''}`}>
                <h4>{this.state.titleData}</h4>
                <p>
                    {this.state.ContentData}
                </p>
            </div>

        )

    }

}