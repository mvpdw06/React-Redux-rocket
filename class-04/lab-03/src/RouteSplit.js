import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import './App.css';

const Links = () => (
    <nav>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
    </nav>
)

const Header = ({ match }) => (
    <div className="header">
        <Route path="/:page" render={({ match })=> (
            <h1>{match.params.page} Header.</h1>
        )} />
    </div>
)

const Content = ({ match }) => (
    <div className="content">
        <Route path="/:page" render={({ match }) => (
            <p>{match.params.page} Content.</p>
        )} />
    </div>
)

const App = () => (
    <Router>
        <div>
            <Links />
            <Header />
            <Content />
        </div>
    </Router>
)

module.exports = App;