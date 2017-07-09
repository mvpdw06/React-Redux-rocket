import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Prompt
} from 'react-router-dom';

import './App.css';

const Links = () => (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/form'>Form</Link>
    </nav>
)

class Form extends Component {
    state = {
        dirty: false
    }
    setDirty = () => this.setState({ dirty: true })
    render() {
        return (
            <div>
                <h1>From</h1>
                <p>dirty: {JSON.stringify(this.state.dirty)}</p>
                <input type='text' onInput={this.setDirty} />
                <Prompt 
                    when={this.state.dirty}
                    message="Your data will be lost!"
                    />
            </div>
        );
    }
}

const App = () => (
    <Router>
        <div>
            <Links />
            <Route exact path='/' render={() => (<h1>Home</h1>)} />
            <Route path='/form' component={Form} />
        </div>
    </Router>
)

module.exports = App;