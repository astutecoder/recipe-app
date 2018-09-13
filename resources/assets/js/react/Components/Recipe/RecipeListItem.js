import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import { excerpt } from '../../selectors'

class RecipeListItem extends Component {
    render() {
        return (
            <div className="card">
                <img
                    className="card-img-top"
                    src={'images/food_image/' + this.props.recipe.image}
                    alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.recipe.title}</h5>
                    <p className="card-text text-muted">{excerpt(this.props.recipe.steps, 120)}</p>
                    <Link to={this.props.match.url+'/'+this.props.recipe.id} className="btn btn-primary btn-sm">See Details</Link>
                </div>
            </div>
        )
    }
}
export default withRouter(RecipeListItem)
