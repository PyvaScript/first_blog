import { CATEGORIES_ACTION_TYPES } from "./categories.types.js";
import { createAction } from "../../utils/reducer/reducer.utils.js";

export const setCategories=(categoriesArray)=>createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
