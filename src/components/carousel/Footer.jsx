import React, { Component } from 'react';



export default class Footer extends Component {


    render() {

        return (
            <>
                <footer className="container">
                    <p className="float-end"><a href="/">Back to top</a></p>
                    <p>&copy; 2017–2021 Company, Inc. &middot; <a href="/">Privacy</a> &middot; <a href="/">Terms</a></p>
                </footer>
            </>

        )
    }

}