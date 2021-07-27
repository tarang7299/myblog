import React, { Component } from 'react';
// import Form from './From';
// import Movies from './Movies';
import {  Link } from 'react-router-dom'
import { getTopmenu } from './../../services/FakeMenuServices';



export default class Menu extends Component {


    state =
    {
        topmenus : getTopmenu()
    };

    render() {

        return (
            <>
                {/* <Router > */}
                    
                    <div className="nav-scroller py-1 mb-2">
                        <nav className="nav d-flex justify-content-between">

                            {/* <Link exact to="/">
                                Blog
                            </Link> */}

                            {/* <a className="p-2 link-secondary" href="/">
                                <Link exact to="/Movies">Movies</Link >
                            </a> */}

                            {/* <Link exact to="/movies">Movies</Link >
                            <Link exact to="/form">Form</Link>
                            <Link>Technology</Link>
                            <Link>Design</Link>
                            <Link>Culture</Link>
                            <Link>Business</Link>
                            <Link>Politics</Link>
                            <Link>Opinion</Link>
                            <Link>Science</Link>
                            <Link>Health</Link>
                            <Link>Style</Link>
                            <Link>Travel</Link> */}

                            <ul>
                                {this.state.topmenus.map(topmenu =>
                                    <li key={topmenu.id}>
                                        <Link to={topmenu.linkpath}>
                                            {topmenu.linkpath}
                                        </Link>
                                    </li>
                                    )}

                            </ul>

                            {/* <a className="p-2 link-secondary" href="/">Technology</a>
                            <a className="p-2 link-secondary" href="/">Design</a>
                            <a className="p-2 link-secondary" href="/">Culture</a>
                            <a className="p-2 link-secondary" href="/">Business</a>
                            <a className="p-2 link-secondary" href="/">Politics</a>
                            <a className="p-2 link-secondary" href="/">Opinion</a>
                            <a className="p-2 link-secondary" href="/">Science</a>
                            <a className="p-2 link-secondary" href="/">Health</a>
                            <a className="p-2 link-secondary" href="/">Style</a>
                            <a className="p-2 link-secondary" href="/">Travel</a> */}
                        </nav>
                    </div>

                    {/* <Switch>

                        

                        <Route exact path="/movies">
                            <Movies />
                        </Route>
                        <Route exact path="/form">
                            <Form />
                        </Route>
                    </Switch> */}

                {/* </Router> */}


            </>

        )
    }

}