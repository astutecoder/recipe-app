import React, {Component} from 'react'
import axios from 'axios';
import RecipeListItem from "./RecipeListItem";

export default class RecipeHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
        }
    }

    componentWillMount() {
        axios.get('http://localhost:8000/api/v1/get-recipes',{
            'headers': {
                'Authorization' : 'Bearer 0mXTxjf6BkzZ5FIj7qbvW9SOBIeJY1tr1WZyBttEoKuzmTlRvA6jiXWERT4Z'
            }
        })
            .then(response => this.setState({recipes: response.data}))
            .catch(error => console.log(error))
    }

    render() {
        let recipes = this.state.recipes.map(recipe => (recipe));
        console.log(recipes);
        return (
            <div>
                {recipes.map(recipe => (<RecipeListItem key={recipe.id} recipe={recipe} />))}
            </div>
        )
    }
}
