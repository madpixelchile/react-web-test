
import React, {Component} from 'react';



export class FlowBoxStructure extends Component{

    constructor(props){
        super(props);

        this.state = {
            titleData: this.props.title,
            ContentData: this.props.content,
            ContentClass:  this.props.classType,
            itemNumber: this.props.itemNumberIndex,
        }

        // console.log(this.state.itemNumber);

    }

    render(){
        // console.log('entra funcion interna:' + this.props.itemPageCounter);
        return(

            <div className={`infoArea ${this.state.ContentClass} ${this.state.itemNumber === this.props.itemPageCounter ? 'active' : ''}`}>
                <h4>{this.state.titleData}</h4>
                <p>
                    {this.state.ContentData}
                </p>
            </div>

        )

    }

}