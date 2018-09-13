import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';

export default class RecipePagination extends Component {
    getPageLinks = () => {
        let pageLinksLi = [];
        for(let i = 1; i <= this.props.requiredPages; i++){
            pageLinksLi.push(i);
        }
        return pageLinksLi;
    }

    prevLink = () => {
        let {page=1} = this.props.extractQuery();
        return (+page-1)
    }
    nextLink = () => {
        let {page=1} = this.props.extractQuery();
        return (+page+1)
    }

    render() {
        return (
            <div className="w-100">
                <hr/>
                <nav aria-label="Page navigation example">
                    <ul className="pagination pagination-sm justify-content-center mb-auto">  
                        {(this.props.extractQuery().page && this.props.extractQuery().page > 1) &&
                            <Link to={`/recipe?page=1`}>                            
                                <li className="page-item">
                                    <span className="page-link">First</span>
                                </li>
                            </Link>
                        }
                        {(this.props.extractQuery().page && this.props.extractQuery().page > 1) &&
                            <Link to={`/recipe?page=${this.prevLink()}`}>                            
                                <li className="page-item">
                                    <span className="page-link">&laquo;</span>
                                    <span class="sr-only">Previous</span>
                                </li>
                            </Link>
                        }
                        {this.getPageLinks().map((item, index) => (
                        <NavLink key={index} to={`/recipe?page=${item}`}>
                            <li className={ (+this.props.extractQuery().page === item)? "page-item active" : "page-item" }>
                                <span className="page-link">
                                    {item}
                                </span>
                            </li>
                        </NavLink>))}
                        
                        {(this.props.extractQuery().page && this.props.extractQuery().page < this.props.requiredPages) &&
                            <Link to={`/recipe?page=${this.nextLink()}`}>                            
                                <li className="page-item">
                                    <span className="page-link">&raquo;</span>
                                    <span class="sr-only">Next</span>
                                </li>
                            </Link>
                        }
                        {(this.props.extractQuery().page && this.props.extractQuery().page < this.props.requiredPages) &&
                            <Link to={`/recipe?page=${this.props.requiredPages}`}>                            
                                <li className="page-item">
                                    <span className="page-link">Last</span>
                                </li>
                            </Link>
                        }
                    </ul>
                </nav>
            </div>
        )
    }
}
