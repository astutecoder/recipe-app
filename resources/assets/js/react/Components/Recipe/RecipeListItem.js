import React, {Component} from 'react';

export default class RecipeListItem extends Component {
    render() {
        return (
            <div className="card">
                <img
                    className="card-img-top"
                    src={'/storage/food_image/' + this.props.recipe.image}
                    alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.recipe.title}</h5>
                    <p className="card-text">{this.props.recipe.steps}</p>
                    <a href="#" className="btn btn-primary">See Details</a>
                </div>
            </div>
        )
    }
}
