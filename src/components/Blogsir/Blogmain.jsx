import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import { Redirect, Route, Switch } from 'react-router';
import Movies from './movies/Movies';
import Moviesdetail from './movies/Moviesdetail';
import Notfound from './Notfound';
import Body from './Body';
import Form from './From';



export default class Blogmain extends Component {


    render() {

        return (
            <>
                <div className="container">
                    <Header />
                </div>

                <div>
                    <Switch>

                        <Route path="/movies/:title" component={Moviesdetail} />

                        <Route path="/form" component={Form}/>
                        <Route path="/movies" component={Movies} />
                        <Route path="/not-found" component={Notfound} />
                        <Route exact path="/" component={Body} />
                        <Redirect to="/not-found" />
                    </Switch>


                </div>

                <Footer />
            </>

        )
    }

}