import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";

import CategoriesPreview from "../categories-preview/categories-preview.component.jsx";
import Category from "../../components/category/category.component.jsx";

import "./shop.styles.scss";

const Shop=()=>{

    const dispatch=useDispatch();

    useEffect(()=>{
        const getCategoriesMap=async()=>{
            const categoryMap=await getCategoriesAndDocuments();
            dispatch(setCategoriesMap(categoryMap));
        };
        getCategoriesMap();
    },[]);

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
