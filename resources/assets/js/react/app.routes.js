import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Example from "./Components/Example";
import NotFoundPage from "./Components/NotFound";
import Help from "./Components/Help";

export default class Routes extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to='/help'>asdf</Link></li>
                    </ul>
                    <Switch>
                        <Route path='/' component={Example} exact={true} />
                        <Route path='/help' component={Help} />
                        <Route component={NotFoundPage}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Routes />, document.getElementById('example'));

