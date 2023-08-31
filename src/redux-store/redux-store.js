import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";

import { rootReducer } from "./root-reducer.js";

const loggerMiddleware=(store)=>(next)=>(action)=>{
    if(!action.type) {
        return next(action);
    };

    next(action);

}

const middleWare=[loggerMiddleware];

const composedEnhancers=compose(applyMiddleware(...middleWare));

export const reduxStore=createStore(rootReducer, undefined, composedEnhancers);
