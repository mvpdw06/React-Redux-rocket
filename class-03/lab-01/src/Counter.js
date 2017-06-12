import React from 'react';

const Counter = ({
    count,
    increment,
    decrement
}) => {
    return (
        <div>
            <h2>Hello Flux.</h2>
            <h3>Counter: { count }</h3>
            <button onClick={ increment }>Increment</button>
            <button onClick={ decrement }>Decrement</button>
        </div>
    )
}

module.exports = Counter;