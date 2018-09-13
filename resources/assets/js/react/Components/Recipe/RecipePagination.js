import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';

export default class RecipePagination extends Component {
    getPageLinks = () => {
        let pageLinksLi = [];
        for(let i = 1; i <= this.props.requiredPages; i++){
            pageLinksLi.push(i);
        }

        if(this.props.requiredPages > 10){
            console.log("I'm here and total page required: ", this.props.requiredPages);
            let {page=1} = this.props.extractQuery();
            let fromPageIndex = (pageLinksLi.indexOf(+page) > 4) ? (pageLinksLi.indexOf(+page)-4) : 0;
            let tillPageIndex = ((+page+5) > this.props.requiredPages)? (this.props.requiredPages+1) : (pageLinksLi.indexOf(+page) <= 4 ? 10 :(+page+5));
            
            let pageLinksLiToBeShown = pageLinksLi.slice(fromPageIndex, tillPageIndex);
            console.log('pageLinksLiToBeShown: ', pageLinksLiToBeShown);
            return pageLinksLiToBeShown;
        }else{
            return pageLinksLi;
        }
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
        console.log(this.getPageLinks());
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
                                    <span className="sr-only">Previous</span>
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
                                    <span className="sr-only">Next</span>
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
