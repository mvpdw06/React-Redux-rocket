import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';

import './App.css';

const Links = () => (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/old/123'>Old</Link>
        <Link to='/new/456'>New</Link>
        <Link to='/protected'>Protected</Link>
    </nav>
)

const Home = () => (
    <h1>Home</h1>
)

const New = ({ match }) => (
    <h1>New: {match.params.str}</h1>
)

const isLogin = true;

const RedirectRoutes = () => (
    <div>
        <Route path='/old/:str' render={({ match }) => (
            <Redirect to={`/new/${match.params.str}`} />
        )} />
        <Route path='/protected' render={({ match }) => (
            isLogin
                ? <h1>Welcome to protected page.</h1>
                : <Redirect to='/new/Login' />
        )} />
    </div>
)

const App = () => (
    <Router>
        <div>
            <Links />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/new' component={New} />
                <Redirect from='/old' to='/new' />
            </Switch>
        </div>
    </Router>
)

// const App = () => (
//     <Router>
//         <div>
//             <Links />
//             <Route exact path='/' component={Home} />
//             <Route path='/new/:str' component={New} />
//             <RedirectRoutes />
//         </div>
//     </Router>
// )

module.exports = App;