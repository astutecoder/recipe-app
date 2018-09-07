import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getAllRecipe, resetAllRecipe} from '../../actions/recipe.actions'

export default class RecipePagination extends Component {
    getPageLinks = (e) => {
        let pageLinksLi = [];
        for(let i = 1; i <= this.props.url.last_page; i++){
            pageLinksLi.push(i);
        }
        return pageLinksLi;
    }
    render() {
        return (
            <div className="w-100">
                <hr/>
                <nav aria-label="Page navigation example">
                    <ul className="pagination pagination-sm justify-content-center mb-auto">
                        {
                            (this.props.url.prev !== null) &&
                            <li className="page-item" onClick={() => this.props.getAllRecipe(this.props.url.prev)}>
                                <span className="page-link">Previous</span>
                            </li>
                        }
                        {this.getPageLinks().map((pageNum, index) =>(
                            <li key={index} className={(pageNum === this.props.url.current_page)? "page-item active":"page-item"}>
                                <span className="page-link" onClick={() => this.props.getAllRecipe(`${this.props.apiLink}?page=${pageNum}`)}>{pageNum}</span>
                            </li>
                        ))}
                        {
                            (this.props.url.next !== null) &&
                            <li className="page-item" onClick={() => this.props.getAllRecipe(this.props.url.next)}>
                                <span className="page-link">Next</span>
                            </li>
                        }
                    </ul>
                </nav>
            </div>
        )
    }
}
