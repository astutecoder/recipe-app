import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">Who am I?</div>

                <div className="card-body">
                    I'm an example component!
                </div>
            </div>
        );
    }
}

// if (document.getElementById('example')) {     ReactDOM.render(<Example />,
// document.getElementById('example')); }