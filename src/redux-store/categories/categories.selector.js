import { createSelector } from 'reselect';

const selectCategoriesMapReducer=(state)=>state.categories;

export const selectCategories=createSelector(
    [ selectCategoriesMapReducer ],
    (categories)=>categories.categoriesArray
);

export const selectCategoriesMap=createSelector(
    [ selectCategories ],
    // The blow reduce function maintains an object here called acc and adds an object to represent each category as coded below
    (categories)=>categories.reduce((acc, category)=>{
        const { title, items }=category;
        acc[title]=items;
        return acc;
    }, {})
);

// export const selectCategoriesMap=(state)=>state.categories.categoriesArray
// .reduce((acc, category)=>{const { title, items }=category; acc[ title ]=items; return acc},{});

// export const selectCategoriesMap=(state)=>state.categories.categories;
