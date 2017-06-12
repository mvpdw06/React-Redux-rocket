import { INCREMENT, DECREMENT } from './actionType';

const action = {
    increment: () => ({ type: INCREMENT }),
    decrement: () => ({ type: DECREMENT })
}

module.exports = action;