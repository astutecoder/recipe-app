import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import  RecipeHome from './Components/Recipe/RecipeHome';
import store from "./store/recipe.store";

export default class RecipeApp extends Component{
    render(){
        return(
            <Provider store={store}>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>RECIPE APP</h2>
                            <hr/>
                            <RecipeHome />
                            <hr/>
                            <p>what is happening??</p>
                        </div>
                    </div>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<RecipeApp />, document.getElementById('recipe_component'));