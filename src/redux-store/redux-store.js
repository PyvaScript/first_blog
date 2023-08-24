import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";

import { rootReducer } from "./root-reducer.js";

const loggerMiddleware=(store)=>(next)=>(action)=>{
    if(!action.type) {
        return next(action);
    };

    console.log("Type: ",action.type);
    console.log("Payload: ",action.payload);
    console.log("Current State: ",store.getState());

    next(action);

    console.log("New state: ",store.getState());
}

const middleWare=[loggerMiddleware];

const composedEnhancers=compose(applyMiddleware(...middleWare));

export const reduxStore=createStore(rootReducer, undefined, composedEnhancers);
