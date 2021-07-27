import React, { Component } from 'react';



export default class Moviesdetail extends Component {

    


    render() {

        return (
            <>

                <div className="row">
                    <h1>Movie Detail Page - {this.props.match.params.title}</h1>
                    <button onclick="myFunction()">Upload</button>
                    <script>
                        function myFunction() {
                            alert("Your file is being uploaded!")
                        }
                    </script>

                </div>


            </>

        )
    }

}