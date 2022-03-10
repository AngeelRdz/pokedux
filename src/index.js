import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import { Provider } from 'react-redux';
import pokemonReducer from './reducers/pokemonReducer';
import { createStore, compose, applyMiddleware } from 'redux';
import { logAction, reportError } from './middlewares';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import pokemonSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//* Se comenta para utilizarlo en redux-thunk
// const composedEnhacers = compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
//     applyMiddleware(logAction, reportError)
// );

//* Se comenta para utilizarlo en redux-saga
// const composedEnhacers = composeAlt(
//     applyMiddleware(thunk, logAction, reportError)
// );

const composedEnhacers = composeEnhancers(
    applyMiddleware(sagaMiddleware, logAction, reportError)
);

const store = createStore(pokemonReducer, composedEnhacers);

sagaMiddleware.run(pokemonSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
