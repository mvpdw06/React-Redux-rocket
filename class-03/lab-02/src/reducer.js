import { INCREMENT, DECREMENT } from './actionType';
// import { combineReducers } from 'redux';

const Reducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

// const reducers = {
//     counter: counterReducer,
//     timer: timerReducer,
//     global: globalReducer,
//     routing: routerReducer
// }

// const rootReducer = combineReducers(reducers);

module.exports = Reducer;