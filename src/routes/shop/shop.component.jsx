import { useContext } from 'react';
import { ProductsContext } from "../../contexts/products.context.jsx";
import ProductCard from "../../components/product-card/product-card.component.jsx";

const Shop=()=>{
    const { products }=useContext(ProductsContext);
    console.log("This is working");
    return (
        <div>
            { products.map((product)=>(
                <ProductCard key={ product.id } product={ product }/>
            ))}
        </div>
    );
};

export default Shop;
