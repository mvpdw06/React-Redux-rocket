import reducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const devStore = createStore(reducer, composeWithDevTools(middleware));
const prodStore = createStore(reducer, middleware);

module.hot && module.hot.accept('./reducer.js', () => {
    const nextReducer = require('./reducer');
    store.replaceReducer(nextReducer);
});

let store;
if (process.env.NODE_ENV === 'production') {
    store = prodStore;
} else {
    store = devStore
}

module.exports = store;