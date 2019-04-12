
import React from 'react';

export const ButtonComponent = ({buttonText, buttonAction})=>{

    if(buttonAction === 'modal')
        console.log('modal');
    else
        console.log('otra wea');

    return(

        <button>{buttonText}</button>

    );    

}
