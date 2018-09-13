import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/recipe.store'
import RecipeHome from './Components/Recipe/RecipeHome';
import Help from './Components/Help';

export default class RecipeRoute extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>RECIPE APP</h2>
                                <hr/>
                                <Switch>
                                    <Route path='/' component={Example} exact={true}/>
                                    <Route path='/beef-recipe/:id' component={RecipeHome}/>
                                    <Route path='/help' component={Help}/>
                                    <Route component={NotFoundPage}/>
                                </Switch>
                                <hr/>
                                <p>what is happening??</p>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render(
    <RecipeRoute/>, document.getElementById('recipe_component'));