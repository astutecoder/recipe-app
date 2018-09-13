import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getAllRecipe} from '../../actions/recipe.actions';
import {findRecipeById} from '../../selectors';

import './CSS/RecipeSingle.css'

class RecipeSingle extends Component {
    componentDidMount() {
        this
            .props
            .getAllRecipe()
    }

    findRecipe = () => {
        return findRecipeById(+ this.props.match.params.id, this.props.recipes)
    }
    render() {
        return (
            <div>
                {this
                    .findRecipe()
                    .map(recipe => (
                        <div className="card" key={recipe.id}>
                            <div
                                className="card-img-top"
                                style={{
                                  backgroundImage: `url("${this.props.baseURL+'images/food_image/' + recipe.image}")`,
                                  backgroundPosition: 'center',
                                  backgroundSize: "cover",
                                  height: '350px'
                                  }}>
                                </div>
                            <div className="card-body">
                                <h4 className="card-title">{recipe.title}</h4>
                                <ul className="d-flex flex-md-nowrap justify-content-between cited-list pl-0 text-muted">
                                  {recipe.prep_time && <li>প্রস্তুতুতির সময়ঃ {recipe.prep_time}</li>}
                                  {recipe.cooking_time && <li>রান্নার সময়ঃ {recipe.cooking_time}</li>}
                                  {recipe.serving_qty && <li>পরিবেশনঃ {recipe.serving_qty}</li>}
                                  {recipe.source && <li>রেসিপিঃ {recipe.source}</li>}
                                </ul>
                                <h5>উপকরণঃ</h5>
                                <p className="card-text">{
                                  recipe.ingredients.split('\n').map((item, index) => (<span key={index}><span>{item}</span><br /></span>))
                                  }</p>

                                <h5>প্রণালীঃ</h5>
                                <p className="card-text">{recipe.steps.split('\n').map((item, index) => (<span key={index}><span>{item}</span><br /></span>))}</p>

                                {recipe.tips &&
                                (
                                  <div>
                                    <h5>জেনে রাখুনঃ</h5>
                                    <p className="card-text">{recipe.tips}</p>
                                  </div>
                                )
                                }

                                <hr />
                                <button onClick={this.props.history.goBack} className="btn btn-light btn-sm">Go Back
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        )
    }
}

const mapToState = (state) => ({
  recipes: state.recipes.items,
  baseURL: state.recipes.baseURL
})
export default connect(mapToState, {getAllRecipe})(RecipeSingle);
