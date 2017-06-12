import React, { Component } from 'react';
import { connect } from 'react-redux';
import action from './action';

const App = ({
    state: {
        count,
        data
    },
    increment,
    decrement,
    fetchData
}) => {
    return (
        <div>
            <h2>Hello Redux.</h2>
            <h3>Counter: {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={fetchData}>Fetch data with async action.</button>
            <h3>fetch result: {data}</h3>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return { state };
}
const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(action.increment()),
    decrement: () => dispatch(action.decrement()),
    fetchData: () => dispatch(action.fetchData())
});

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);