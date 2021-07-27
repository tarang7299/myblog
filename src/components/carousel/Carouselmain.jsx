import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import { Redirect, Route, Switch } from 'react-router';
import Body from './Body';
import Notfound from '../myblog/Notfound';
import Form from './From';
import Movies from './mov/Movies';
import Moviesdetail from './mov/Moviesdetail';



export default class Carouselmain extends Component {


    render() {

        return (
            <>
                <Header />
                <div>
                    <Switch>

                        <Route path={`/movies/:title`} component={Moviesdetail}/>
                        <Route path="/movies" component={Movies}/>
                        <Route path="/form" component={Form}/>
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