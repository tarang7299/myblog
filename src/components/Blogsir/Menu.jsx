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
                <div className="nav-scroller py-1 mb-2">
                    <nav className="nav d-flex justify-content-between">

                        {this.state.topmenus.map(topmenu =>
                            <Link key={topmenu.id} to={topmenu.linkpath}>
                                {topmenu.linktest}
                            </Link>
                        )}

                    </nav>
                </div>
            </>

        )
    }

}