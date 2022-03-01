import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import { Provider } from 'react-redux';
import pokemonReducer from './reducers/pokemonReducer';
import { createStore, compose, applyMiddleware } from 'redux';
import { logAction, reportError } from './middlewares';

import './index.css';

const composedEnhacers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(logAction, reportError)
);

const store = createStore(pokemonReducer, composedEnhacers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
