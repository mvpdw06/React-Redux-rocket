import Dispatcher  from './dispatcher';
import { INCREMENT, DECREMENT } from './actionType';

const action = {
    increment() {
        Dispatcher.dispatch({
            type: INCREMENT
        })
    },
    decrement() {
        Dispatcher.dispatch({
            type: DECREMENT
        })
    }
}

module.exports = action;