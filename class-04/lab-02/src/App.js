import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

/* 
    TODO: 
    - Route in URL.
    - strict, exact.
    - component API using inline-function
    - match, location in props
    - get parameter
    - parameter validation
**/
const Home = () => (
    <h1>Home</h1>
)

const App = () => (
    <Router>
        <div>
            <Route exact path='/' component={Home} />
            <Route strict path='/about/' render={() => <h1>About</h1>} />
            <Route 
                path='/contact' 
                children={({ match }) => match && <h1>Contact</h1>}
                />
            <Route 
                path='/param/:first/:second?' 
                render={({ match }) => (
                    <h1>
                        Get Parameter: {match.params.first || 'first'} <br />
                        Second: {match.params.second}
                    </h1>
                )} />
            <Route 
                path='/validparam/:first(\d{2}-\d{2}-\d{4}):second' 
                render={({ match }) => (
                    <h1>
                        Get Parameter: <br />
                        First: {match.params.first} <br />
                        Second: {match.params.second}
                    </h1>
                )} />
            <Route 
                path='/parse/:first/:second' 
                render={({ match, location }) => (
                    <div>
                        <h1>Parse</h1>
                        <p>match: {JSON.stringify(match)}</p>
                        <p>location: {JSON.stringify(location)}</p>
                        <p>{new URLSearchParams(location.search).get('id')}</p>
                    </div>
                )} />
        </div>
    </Router>
)

module.exports = App;