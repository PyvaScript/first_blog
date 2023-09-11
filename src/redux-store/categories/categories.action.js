import { createAction } from '../../utils/reducer/reducer.utils.js';
import { CATEGORIES_ACTION_TYPES } from './categories.types.js';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils.js'

export const fetchCategoriesStart=()=>createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess=(categoriesArray)=>createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed=(error)=>createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync=()=>async(dispatch)=>{
    dispatch(fetchCategoriesStart());

    try {
        const categoriesArray=await getCategoriesAndDocuments('categories');
        dispatch(fetchCategoriesSuccess(categoriesArray));
    }catch(error) {
        dispatch(fetchCategoriesFailed(error));
    };
};




// import { CATEGORIES_ACTION_TYPES } from "./categories.types.js";
// import { createAction } from "../../utils/reducer/reducer.utils.js";

// export const setCategories=(categoriesArray)=>createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
