import React, { Component } from 'react';
import { connect } from 'react-redux';
import action from './action';

const App = ({
    count,
    increment,
    decrement
}) => {
    return (
        <div>
            <h2>Hello Redux.</h2>
            <h3>Counter: {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { count: state };
}
const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(action.increment()),
    decrement: () => dispatch(action.decrement())
});

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);