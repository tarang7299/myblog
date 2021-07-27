import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import Notfound from './Notfound';
import Movies from './Movies';
import Moviesdetail from './Moviesdetail';



export default class Full extends Component {


    render() {

        return (
            <>
                <div className="container">
                    <Header />
                </div>
                <div>
                    <Switch>

                        <Route path="/movies/:title" component={Moviesdetail}/>
                        <Route path="/movies" component={Movies}/>
                        <Route path="/not-found" component={Notfound}/>
                        <Route exact path="/" component={Body}/>
                        <Redirect to="/not-found"/>
                    </Switch>
                </div>
                <Footer />
            </>

        )
    }

}