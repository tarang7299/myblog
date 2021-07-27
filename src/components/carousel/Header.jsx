import React, { Component } from 'react';
import Menu from './Menu';


export default class Header extends Component {


    render() {

        return (
            <>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">Carousel</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                
                                <Menu/>
                                
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </header>
            </>

        )
    }

}