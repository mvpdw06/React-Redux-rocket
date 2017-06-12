import reducer from './reducer';
import { createStore } from 'redux';

const store = createStore(reducer);

module.hot && module.hot.accept('./reducer.js', () => {
    const nextReducer = require('./reducer');
    store.replaceReducer(nextReducer);
});

module.exports = store;