import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

// import { CategoriesContext } from "../../contexts/categories.context.jsx";
import ProductCard from "../product-card/product-card.component.jsx";
import Spinner from '../spinner/spinner.component.jsx';

import { selectCategoriesMap, selectIsCategoriesLoading } from "../../redux-store/categories/categories.selector.js";

import { CategoryTitle, CategoryContainer } from "./category.styles.jsx";
//import "./category.styles.scss";

const Category=()=>{

    const categoriesMap=useSelector(selectCategoriesMap);
    const isLoading=useSelector(selectIsCategoriesLoading);
    const { category }=useParams();
    const [ products, setProducts ]=useState(categoriesMap[category]);

    useEffect(()=>{
        setProducts(categoriesMap[category]);
    }, [ category, categoriesMap ]);

    return (
        <>
            <CategoryTitle>{ category }</CategoryTitle>
            {
                isLoading ? ( <Spinner /> ) : (
                    <CategoryContainer>
                        {
                            products &&
                            products.map((product)=><ProductCard key={ product.id } product={ product } />)
                        }
                    </CategoryContainer>
                )
            }
        </>
    )
};

export default Category;




    
// return (
//     <>
//         <CategoryTitle>{ category }</CategoryTitle>
//         {
//             isLoading ? <Spinner />
//         }
//         <CategoryContainer>
//             {
//                 products &&
//                 products.map((product)=><ProductCard key={ product.id } product={ product } />)
//             }
//         </CategoryContainer>
//     </>
// )
