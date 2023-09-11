import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCategoriesAsync } from '../../redux-store/categories/categories.action.js';

import CategoriesPreview from '../categories-preview/categories-preview.component.jsx';
import Category from '../../components/category/category.component.jsx';

import './shop.styles.scss';

// import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils.js';
// import { setCategories } from "../../redux-store/categories/categories.action.js";

const Shop=()=>{

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchCategoriesAsync());
    }, []);

    // useEffect(()=>{
    //     const getCategoriesMap=async()=>{
    //         const categoriesArray=await getCategoriesAndDocuments();
    //         console.log(categoriesArray);
    //         dispatch(setCategories(categoriesArray));
    //     };
    //     getCategoriesMap();
    // },[]);

    return (
        <Routes>
            <Route index element={ <CategoriesPreview /> } />
            <Route path=":category" element={ <Category /> } />
        </Routes>
    );
};

export default Shop







// import { useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import CategoriesPreview from "../categories-preview/categories-preview.component.jsx";
// import Category from "../../components/category/category.component.jsx";
// import "./shop.styles.scss";

// const Shop=()=>{
    
//     useEffect(()=>{
//         const getCategoriesMap=async()=>{
//             const categoryMap=await getCategoriesAndDocuments();
//             setCategoriesMap(categoryMap);
//         };
//         getCategoriesMap();
//     }, []);

//     return (
//         <Routes>
//             <Route index element={ <CategoriesPreview /> } />
//             <Route path=":category" element={ <Category />} />
//         </Routes>
//     );
// };

// export default Shop;
