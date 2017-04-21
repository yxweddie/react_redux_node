import React from 'react';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createStore, applyMiddleware, compose}  from 'redux';
import appReducers from '../reducers/reducers.js';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appStore = createStore(appReducers, composeEnhancers(
    applyMiddleware(thunk,logger())
));

export default appStore;