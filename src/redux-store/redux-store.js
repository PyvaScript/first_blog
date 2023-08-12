import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer.js";

const middleWare=[logger];

const composedEnhancers=compose(applyMiddleware(...middleWare));

export const reduxStore=createStore(rootReducer, undefined, composedEnhancers);
