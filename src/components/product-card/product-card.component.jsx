import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
import "./product-card.styles.scss";
import Button from "../button/button.component.jsx";

const ProductCard=({ product })=>{
    const { addItemToCart }=useContext(CartContext);
    const { name, price, imageURL }=product;
    const addProductToCart=()=>{
        addItemToCart(product);
    };
    return (
        <div className="product-card-container">
            <img src={ imageURL } alt={ name }/>
            <div className="footer">
                <span className="name">{ name }</span>
                <span className="price">{ price }</span>
            </div>
            <Button button_type="inverted" onClick={ addProductToCart }>Add to cart</Button>
        </div>
    )
};

export default ProductCard;
