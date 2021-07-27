import React, { Component } from 'react';
import Marketing from './Marketing';
import Features from './Features';
import Slider from './Slider';



export default class Body extends Component {


    render() {

        return (
	        <>
                <main>
                    <Slider/>

                    <div className="container marketing">

                        <Marketing/>

                        <Features/>

                    </div>


                </main>
            
            </>

        )
    }

}