import { CATEGORIES_ACTION_TYPES } from "./categories.types.js";
import { createAction } from "../utils/reducer/reducer.utils.js";

export const setCategoriesMap=(categoriesMap)=>createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
