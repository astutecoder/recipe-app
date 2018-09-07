import React, {Component} from 'react';
import RecipeListItem from "./RecipeListItem";
import {connect} from "react-redux";
import {getAllRecipe, resetAllRecipe} from "../../actions/recipe.actions";
import RecipePagination from './RecipePagination';

class RecipeList extends Component {
    getPageLinks = (e) => {
        let pageLinksLi = [];
        for(let i = 1; i <= this.props.url.last_page; i++){
            pageLinksLi.push(i);
        }
        return pageLinksLi;
    }

    componentDidMount() {
        this.props.getAllRecipe();
    }

    render() {
        return (
            <div className="col-md-12">
                <div className="row">
                    <div className="card-columns">
                        {this.props.recipes.map(recipe => (
                                <RecipeListItem key={recipe.id} recipe={recipe}/>
                            )
                        )}
                    </div>

                    {(this.props.url.last_page !== 1) && 
                        <RecipePagination apiLink="/api/v1/get-recipes" url={this.props.url} getAllRecipe={this.props.getAllRecipe}/>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    recipes: state.recipes.items,
    url: state.recipes.url
})
export default connect(mapStateToProps, {getAllRecipe, resetAllRecipe})(RecipeList);