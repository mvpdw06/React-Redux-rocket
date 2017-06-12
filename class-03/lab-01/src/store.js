import { ReduceStore } from 'flux/utils';
import Dispatcher from './dispatcher';
import { INCREMENT, DECREMENT } from './actionType';

class Store extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return 0;
    }

    reduce(state, action) {
        switch (action.type) {
            case INCREMENT:
                return state + 1;
            case DECREMENT:
                return state - 1;
            default:
                return state;
        }
    }
}

module.exports = new Store();