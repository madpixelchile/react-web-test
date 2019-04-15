
import React, {Components} from 'react';

import HTenderTopImg from './img/C01-S10-DK.png';

export class HTGTopModule extends Components(){

    constructor(){
        super();

        this.state = {
            initialSatate: 'one'
        }

    }

    render(){
        return(

            <div className="HTenderModule HTenderModule--top--left">
                <a href="#;" title="Enlace a la promoción">
                    <img className="" src={HTenderTopImg} alt="Imágen de Nuevo Samsung Galaxy S10 - Portándote al plan $19.990 al mes" />
                </a>
            </div>

        )
    }

}


