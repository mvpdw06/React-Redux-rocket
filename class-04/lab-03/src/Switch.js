import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import './App.css';

const Links = () => (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/one'>One</Link>
    </nav>
)

const App = () => (
    <Router>
        <div>
            <Links />
            <Route path='/' render={() => (<h1>Home</h1>)} />
            <Route path='/one' render={() => (<h1>One</h1>)} />
            <Route path='/one:two' render={() => (<h1>Two</h1>)} />
            <Route render={() => (<h1>No Match</h1>)} />
            <Route render={() => (<h1>No Auth</h1>)} />
            <Route render={() => (<h1>Error</h1>)} />
        </div>
    </Router>
)

module.exports = App;