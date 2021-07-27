import React, { Component } from 'react';
import Archives from './Archives';

import Elsewhere from './Elsewhere';

import About from './About';



export default class Rightside extends Component {


    render() {

        return (
            <>
                <div className="col-md-4">

                    <About />

                    <div className="p-4">
                        <Archives />
                    </div>

                    <div className="p-4">
                        <Elsewhere />
                    </div>

                </div>
            </>

        )
    }

}