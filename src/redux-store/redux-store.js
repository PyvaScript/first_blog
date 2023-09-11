import { compose, createStore, applyMiddleware } from 'redux';
// import logger from "redux-logger";

import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root-reducer.js';

import logger from 'redux-logger';

import thunk from 'redux-thunk';

// import { loggerMiddleware } from './middleware/logger.js';

const persistConfig={
    key:'root',
    storage,
    whitelist:['cart'],
};

const persistedReducer=persistReducer(persistConfig, rootReducer);

const middleWare=[process.env.NODE_ENV==='development' && logger, thunk].filter(Boolean);

// const middleWare=[loggerMiddleware];

const composeEnhancer=(process.env.NODE_ENV==='development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers=composeEnhancer(applyMiddleware(...middleWare));

export const reduxStore=createStore(persistedReducer, undefined, composedEnhancers);

export const persistor=persistStore(reduxStore);
