import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux'

import Example from "./Components/Example";
import NotFoundPage from "./Components/NotFound";
import Help from "./Components/Help";
import RecipeHome from './Components/Recipe/RecipeHome';
import RecipeSingle from './Components/Recipe/RecipeSingle';

import store from './store/recipe.store'

class Routes extends Component {
    render() {
        return (
            <Provider store={store}>
                {/* <BrowserRouter basename="/projects/food-recipe/"> */}
                <BrowserRouter>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>ASTUTE RECIPE</h2>
                                <nav aria-label="breadcrumb">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to="/recipe">Meat Recipes</Link>
                                            </li>
                                        </ol>
                                    </nav>
                                </nav>
                                <hr/>
                                <Switch>
                                    <Route path='/recipe' exact component={RecipeHome}/>
                                    <Route path='/recipe/:id' exact component={RecipeSingle}/>
                                    <Route path='/help' component={Help}/>
                                    <Route component={NotFoundPage}/>
                                </Switch>
                                <hr/>
                                <p>developed by: <span className="text-success">AstuteCoder</span></p>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

ReactDOM.render(
    <Routes/>, document.getElementById('recipe_component'));
