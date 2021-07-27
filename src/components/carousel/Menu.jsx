import React, { Component } from 'react';
import { getTopmenu } from './../../services/FakeMenuServices';
import { Link } from 'react-router-dom'



export default class Menu extends Component {

    state =
        {
            topmenus: getTopmenu()
        };

    render() {

        return (
            <>
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    {/* <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li> */}
                    {
                        this.state.topmenus.map(topmenu =>
                            <li key={topmenu.id} className="nav-item">
                                <Link className="nav-link" to={topmenu.linkpath}>
                                    {topmenu.linktest}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </>

        )
    }

}