import React, { Component } from 'react';
import { getMovies } from '../../../services/fakeMovieService';
import _ from 'lodash';
import Pagination from './Pagination';
import ListGroupsfc from './ListGroupsfc';
import { getGenres } from '../../../services/fakeGenreService';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'



export default class Movies extends Component {


    // PRACTICE WORK

    state =
        {
            movies: getMovies(),
            genres: [],
            pageSize: 3,
            currentPage: 1,
            selectedGenre: { name: "All Genres", id: "AllGenres" }
        }

    componentDidMount = () => {

        const genres = [{ name: "All Genres", id: "AllGenres" }, ...getGenres()];

        this.setState({ genres: genres });
    }


    handlePageChange = (page) => {
        // alert(page);
        this.setState({ currentPage: page });
    };

    handelGenreSelect = (genre) => {
        console.log("genre");
        console.log(genre);

        const selectedGenre = genre;
        console.log("selectedgenre");

        console.log(selectedGenre);
        console.log(this.state.selectedGenre.id);
        console.log("state selectedgenre");
        console.log(this.state.selectedGenre.id);


        // this.setState({ selectedGenre: selectedGenre });
        this.setState({ selectedGenre: selectedGenre });
        console.log("state selectedgenre");
        console.log(this.state.selectedGenre.id);


    };



    handlePaginateData = (movies, pageSize, currentPage) => {
        // console.log(movies);
        // console.log(pageSize);
        // console.log(currentPage);

        const startIndex = (currentPage - 1) * pageSize;

        const newmov = _.take(movies.slice(startIndex), pageSize);
        return newmov;
    };

    render() {
        console.log("selected genere id");
        console.log(this.state.selectedGenre.id);
        const filteredmovies = this.state.selectedGenre.id === "AllGenres" ? this.state.movies : this.state.movies.filter(movie => movie.genre.id === this.state.selectedGenre.id);

        console.log(this.state.movies);
        console.log(this.state.movies.filter(movie => movie.genre.id === this.state.selectedGenre.id));
        console.log(filteredmovies);



        // const movies = this.handlePaginateData(this.state.movies, this.state.pageSize, this.state.currentPage)

        const movies = this.handlePaginateData(filteredmovies, this.state.pageSize, this.state.currentPage);

        return (
            <>
                <Router>
                    <h1>Movies</h1>
                    <ListGroupsfc
                        genres={this.state.genres}
                        handelGenreSelect={this.handelGenreSelect}
                        SelectGenre={this.state.selectedGenre}
                    />

                    <div className="raw">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Rate</th>
                                    {/* <th scope="col">Like</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                <th scope="row">Baghi</th>
                                <td>Action</td>
                                <td>5</td>
                                <td>25</td>
                                <td>like</td>
                            </tr> */}
                                {
                                    movies.map(
                                        movie => (

                                            <tr key={movie.id} >
                                                <Route >
                                                    <Link to={`/movies/${movie.title}`}>
                                                        {movie.title}
                                                    </Link>
                                                </Route>

                                                <td>{movie.genre.name}</td>
                                                <td>{movie.numberInStock}</td>
                                                <td>{movie.dailyRentalRate}</td>
                                            </tr>


                                        )

                                    )
                                }
                            </tbody>
                        </table>



                        <Pagination
                            pageSize={this.state.pageSize}
                            currentPage={this.state.currentPage}
                            moviesCount={this.state.movies.length}
                            handlePageChange={this.handlePageChange}
                        />


                    </div>

                </Router>

            </>

        )
    }

}