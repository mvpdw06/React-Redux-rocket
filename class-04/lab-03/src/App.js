import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from 'react-router-dom';

import './App.css';

const Links = () => (
    <nav>
        <Link to='/'>Home</Link>
        <Link to={{ pathname: '/about' }}>About</Link>
        <Link replace to='/contact'>Contact</Link>
        <Link to='/parse?id=123'>Parse123</Link>
        <Link to={{ pathname: '/parse', search: 'id=456' }}>Parse456</Link>
    </nav>
)

const NavLinks = () => (
    <nav>
        <NavLink exact activeClassName="active" to='/'>Home</NavLink>
        <NavLink activeStyle={{ color: 'green' }} to={{ pathname: '/about' }}>About</NavLink>
        <NavLink isActive={isActive} activeClassName="active" replace to='/contact'>Contact</NavLink>
        <NavLink activeClassName="active" to='/parse?id=123'>Parse123</NavLink>
        <NavLink activeClassName="active" to={{ pathname: '/parse', search: 'id=456' }}>Parse456</NavLink>
    </nav>
)

const isActive = (match, location) => {
    console.log(match, location)
    return match;
}


const Home = () => (
    <h1>Home</h1>
)

const About = () => (
    <h1>About</h1>
)

const Contact = () => (
    <h1>Contact</h1>
)

const Parse = ({ match, location }) => (
    <div>
        <h1>Parse</h1>
        <p>match: {JSON.stringify(match)}</p>
        <p>location: {JSON.stringify(location)}</p>
        <p>{new URLSearchParams(location.search).get('id')}</p>
    </div>
)

const App = () => (
    <Router>
        <div>
            <Links />
            <NavLinks />
            <Route exact path='/' component={Home}  />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/parse'  component={Parse} />
        </div>
    </Router>
)

module.exports = App;