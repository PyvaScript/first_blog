import { useContext } from 'react';
import { ProductsContext } from "../../contexts/products.context.jsx";
import ProductCard from "../../components/product-card/product-card.component.jsx";
import "./shop.styles.scss";

const Shop=()=>{
    const { products }=useContext(ProductsContext);
    console.log("This is working");
    return (
        <div className="products-container">
            { products.map((product)=>(
                <ProductCard key={ product.id } product={ product }/>
            ))}
        </div>
    );
};

export default Shop;