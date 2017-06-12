import React, { Component } from 'react';
import { Container } from 'flux/utils';

import Counter from './Counter';
import action from './action';
import Store from './store';

class CounterContainer extends Component {
    static getStores() {
        return [Store];
    }

    static calculateState(prevState) {
        return { count:  Store.getState() };
    }

    render() {
        return <Counter count={this.state.count} {...action} />;
    }
}

module.exports = Container.create(CounterContainer);