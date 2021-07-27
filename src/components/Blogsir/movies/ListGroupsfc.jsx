import React, { Component } from 'react';
import { getGenres } from '../../../services/fakeGenreService';
import { getMovies } from '../../../services/fakeMovieService';

export default class ListGroupsfc extends Component {


    state =
        {
            genres: getGenres(),
            movies: getMovies()
        };

    

        render() {

            const { genres, handelGenreSelect, SelectGenre } = this.props;

            return (
                <>
                    <h3>ListGroupsfc</h3>
                    <ul className="list-group">
                        {

                            genres.map(genre => (
                                <li key={genre.id} id={genre.id}
                                    onClick={() => handelGenreSelect(genre)}
                                    className={genre.id === SelectGenre.id ? "list-group-item active" : "list-group-item"}
                                >
                                    {genre.name}
                                </li>
                            ))
                        }

                    </ul>
                </>

            )
        }

    }