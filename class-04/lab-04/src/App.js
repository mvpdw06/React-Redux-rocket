import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    withRouter
} from 'react-router-dom';

import history from './history';

//TODO: withRouter

const Links = () => (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
    </nav>
)

const Home = () => (
    <div>
        <h1>Home</h1>
        <button onClick={() => history.push('./')} >go to home</button>
        <button onClick={history.goBack} >go back</button>
    </div>
)

const About = () => (
    <div>
        <h1>About</h1>
        <button onClick={() => history.push('./')} >go to home</button>
        <button onClick={history.goBack} >go back</button>
    </div>
)

const Contact = () => (
    <div>
        <h1>Contact</h1>
        <button onClick={() => history.push('./')} >go to home</button>
        <button onClick={history.goBack} >go back</button>
    </div>
)

const App = () => (
    <Router history={history}>
        <div>
            <Links />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
        </div>
    </Router>
)

module.exports = App;