import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer.js";
import { categoriesReducer } from "./categories/categories.reducer.js";

export const rootReducer=combineReducers({
    user:userReducer,
    categories:categoriesReducer,
});
