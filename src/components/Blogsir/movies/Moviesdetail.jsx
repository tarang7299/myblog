import React, { Component } from 'react';



export default class Moviesdetail extends Component {


    render() {

        return (
	        <>

                <div className="row">
                    <h1>Movie Detail Page - {this.props.match.params.title}</h1>
                </div>
            
            </>

        )
    }

}