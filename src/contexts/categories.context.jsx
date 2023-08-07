import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext=createContext({
    categoriesMap:{},
});

export const CategoriesProvider=({ children })=>{
    const [ categoriesMap, setCategoriesMap ]=useState({});

    useEffect(()=>{
        const getCategoriesMap=async()=>{
            const categoryMap=await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        };
        getCategoriesMap();
    },[]);

    const value={ categoriesMap };  
    return <CategoriesContext.Provider value={ value }>{ children }</CategoriesContext.Provider>
};


// import { createContext, useEffect, useReducer } from "react";
// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// export const CategoriesContext=createContext({
//     categoriesMap:{},
// });

// const USER_ACTION_TYPES={
//     SET_CATEGORIES_MAP:"SET_CATEGORIES_MAP",
// };

// const categoriesReducer=(state, action)=>{
//     const { type, payload }=action;

//     switch(type){
//         case USER_ACTION_TYPES.SET_CATEGORIES_MAP:
//             return {
//                 ...state,
//                 categoriesMap: payload,
//             }
//     }
// }

// const INITIAL_STATE={
//     categoriesMap:{},
// };

// export const CategoriesProvider=({ children })=>{
//     //const [ categoriesMap, setCategoriesMap ]=useState({});

//     const [ state, dispatcher ]=useReducer(categoriesReducer, INITIAL_STATE);
//     const { categoriesMap }=state;

//     const setCategoriesMap=(categoriesMap)=>{
//         dispatcher({ type:USER_ACTION_TYPES.SET_CATEGORIES_MAP, payload: categoriesMap });
//     };

//     useEffect(()=>{
//         const getCategoriesMap=async()=>{
//             const categoryMap=await getCategoriesAndDocuments();
//             setCategoriesMap(categoryMap);
//         };
//         getCategoriesMap();
//     },[]);

//     const value={ categoriesMap };
//     return <CategoriesContext.Provider value={ value }>{ children }</CategoriesContext.Provider>
// }
