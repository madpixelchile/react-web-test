import React from 'react';

import {HeaderAccessComponent} from './../HeaderAccess/';
import {HeaderAreaButtons} from './../HeaderAreaButtons/'

import './HeaderTopNav.scss';

export const TopNavComponent = ()=>{

    return(
        <div className="topNav">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="topNav__core">
                            <HeaderAreaButtons />
                            <HeaderAccessComponent />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}