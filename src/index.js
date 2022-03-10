import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import { Provider } from 'react-redux';
import pokemonReducer from './reducers/pokemonReducer';
import { createStore, compose, applyMiddleware } from 'redux';
import { logAction, reportError } from './middlewares';
import thunk from 'redux-thunk';

import './index.css';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const composedEnhacers = compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
//     applyMiddleware(logAction, reportError)
// );

const composedEnhacers = composeAlt(
    applyMiddleware(thunk, logAction, reportError)
);

const store = createStore(pokemonReducer, composedEnhacers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
