import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import  RecipeHome from './Components/Recipe/RecipeHome';

export default class RecipeApp extends Component{
    render(){
        return(
            <div>
                <RecipeHome />
            </div>
        )
    }
}

ReactDOM.render(<RecipeApp />, document.getElementById('recipe_component'));