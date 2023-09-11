import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component.jsx";
import Spinner from '../../components/spinner/spinner.component.jsx';

import { selectCategoriesMap, selectIsCategoriesLoading } from "../../redux-store/categories/categories.selector.js";

import { CategoriesPreviewContainer } from "./categories-preview.styles.jsx";

const CategoriesPreview=()=>{

    const categoriesMap=useSelector(selectCategoriesMap);
    const isLoading=useSelector(selectIsCategoriesLoading);

    return (
        <CategoriesPreviewContainer>
            {
                isLoading ? ( <Spinner /> ):(
                Object.keys(categoriesMap).map((title)=>{
                    const products=categoriesMap[title];
                    return <CategoryPreview key={ title } title={ title } products={ products }/>;
                })
                )
            }
        </CategoriesPreviewContainer>
    )
};

export default CategoriesPreview;
