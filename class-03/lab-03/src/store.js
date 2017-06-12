import reducer from './reducer';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const devStore = createStore(reducer, devToolsEnhancer());
const prodStore = createStore(reducer);

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