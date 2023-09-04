import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";

import { rootReducer } from "./root-reducer.js";

const loggerMiddleware=(store)=>(next)=>(action)=>{
    console.log("oldState: ",store.getState());
    if(!action.type){
        return next(action);
    };

    console.log("type: ",action.type);
    console.log("payload: ",action.payload);
    console.log("currentState: ",action.currentState);

    next(action);

    console.log("next state: ",store.getState());
}

// const loggerMiddleware=(store)=>(next)=>(action)=>{
//     if(!action.type) {
//         return next(action);
//     };

//     next(action);

// }

const middleWare=[loggerMiddleware];

const composedEnhancers=compose(applyMiddleware(...middleWare));

export const reduxStore=createStore(rootReducer, undefined, composedEnhancers);
