import React, {Component} from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';

import {getAllRecipe, resetAllRecipe} from "../../actions/recipe.actions";
import { filterRecipePagination } from '../../selectors'

import RecipeListItem from "./RecipeListItem";
import RecipePagination from './RecipePagination';


class RecipeList extends Component {
    defaultPerpage = () => {
        return 6;
    }
    requiredPages = () => {
        return Math.ceil(this.props.recipes.length / this.defaultPerpage());
    }

    isValidPageRequest(){
        let totalPages = this.requiredPages();
        let {page:currentPage} = this.extractQuery();
        
        if(!currentPage || totalPages < currentPage){
            this.props.history.replace('/recipe?page=1')
            return;
        }
    }

    extractQuery = () => {
        const query = require('query-string');
        return (query.parse(this.props.location.search));
    };

    componentDidMount() {
        this.props.getAllRecipe();
    }
    componentDidUpdate(){
        this.isValidPageRequest();
    }

    recipesToShow = () =>{
        const {page=1} = this.extractQuery();
        return filterRecipePagination(this.defaultPerpage(), page, this.props.recipes);
    }

    render() {
        return (
            <div className="col-md-12">
                <div className="row">
                    <div className="card-columns">
                        {(this.props.recipes.length < 1) ?
                        (<h5>Loading...</h5>) :
                        (this.recipesToShow().map((recipe, index) => (
                            <RecipeListItem key={index} recipe={recipe}/>
                        )
                        ))}
                    </div>

                    {(this.props.recipes.length > this.defaultPerpage()) && 
                        <RecipePagination {...this.props} perpage={this.defaultPerpage()} requiredPages={this.requiredPages()} extractQuery={() => this.extractQuery()} />
                    } 
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    recipes: state.recipes.items,
})
export default connect(mapStateToProps, {getAllRecipe, resetAllRecipe})(RecipeList);
