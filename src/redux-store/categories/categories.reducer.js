import { CATEGORIES_ACTION_TYPES } from './categories.types.js';

export const CATEGORIES_INITIAL_STATE={
    categoriesArray:[],
    isLoading:false,
    error:null,
};

export const categoriesReducer=(state=CATEGORIES_INITIAL_STATE, action={})=>{
    const { type, payload }=action;

    switch(type) {

        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
            return {
                ...state,
                isLoading: true,
            };

        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categoriesArray: payload,
                isLoading: false,
            };

        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
            return {
                ...state,
                error: payload,
                isLoading: false,
            };

        default:
            return state;
    };
};

// import { CATEGORIES_ACTION_TYPES } from "./categories.types.js";

// export const CATEGORIES_INITIAL_STATE={
//     categoriesArray:[],
//     isLoading:false,
//     error:null,
// };

// export const categoriesReducer=(state=CATEGORIES_INITIAL_STATE, action)=>{
//     const { type, payload }=action;

//     switch(type) {
//         case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
//             return {
//                 ...state,
//                 categoriesArray: payload,
//             };
        
//         default:
//             return state;
//     };
// };
