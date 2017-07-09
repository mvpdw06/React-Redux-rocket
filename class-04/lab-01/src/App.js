import React, { Component } from 'react';
import PresentationalComponent from './PresentationalComponent';

const App = () => {
    const props = {
        fetchData: fetch('https://api.github.com/users/mvpdw06')
    }
    return (
        <PresentationalComponent {...props} />
    )
}
module.exports = App;