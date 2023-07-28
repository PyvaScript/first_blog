import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context.jsx";
import CategoryPreview from "../../components/category-preview/category-preview.component.jsx";

import { CategoriesPreviewContainer } from "./categories-preview.styles.jsx";

const CategoriesPreview=()=>{
    const { categoriesMap }=useContext(CategoriesContext);

    return (
        <CategoriesPreviewContainer>
            {
                Object.keys(categoriesMap).map((title)=>{
                    const products=categoriesMap[title];
                    return <CategoryPreview key={ title } title={ title } products={ products }/>;
                })
            }
        </CategoriesPreviewContainer>
    )
};

export default CategoriesPreview;
