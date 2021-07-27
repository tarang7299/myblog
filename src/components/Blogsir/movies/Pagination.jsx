import React, { Component } from 'react';
import _ from 'lodash';


export default class Pagination extends Component {


    handlePageCount = () =>
    {
        const {pageSize, moviesCount} = this.props;

        // console.log(pageSize);
        // console.log(moviesCount);

        const pageCount = Math.ceil(moviesCount/pageSize);  //float to int

        if(pageCount === 1)
        {
            return null;
        }
        else
        {
            const pages = _.range(1,pageCount + 1); //It will return array with start end and range 
            // console.log(pages);

            return pages.map(page =>
                (
                    <li key={page} className={page === this.props.currentPage ? 'page-item active' : 'page-item'}>
                        <a onClick={() => this.props.handlePageChange(page)} className="page-link" href="#">{page}</a>
                    </li>
                )

            )
        }
    }

    render() {

        return (
	        <>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {/* <li>1</li>
                        <li>2</li> */}
                        {this.handlePageCount()}
                    </ul>
                </nav>

            </>

        )
    }

}