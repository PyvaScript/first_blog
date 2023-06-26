import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';

import "./checkout-product.styles.scss";

const CheckoutProduct=({ product })=>{
    const { name, imageURL, price, quantity }=product;
    const { addCartItem, reduceCartItem, removeCartItem }=useContext(CartContext);

    return (
        <>
        <div className="checkout-product-container">
            <div className="image-container">
                <img src={ imageURL } alt={ name } className="image" />
            </div>
            <div className="text-container">
                <span className="text-container-inner">{ name }</span>
            </div>
            <div className="text-container">
                <span className="text-container-inner">
                    <span className="quantity-adjust-arrow" onClick={ ()=>{ addCartItem( product ) } }>↑</span>
                    <span className="quantity">{ quantity }</span>
                    <span className="quantity-adjust-arrow" onClick={ ()=>{ reduceCartItem( product) } }>↓</span>
                </span>
            </div>
            <div className="text-container">
                <span className="text-container-inner">{ price }</span>
            </div>
            <div className="text-container">
                <span className="text-container-inner"><span className="remove-button" onClick={ ()=>{ removeCartItem(product) } }>X</span></span>
            </div>
        </div>
        </>
    )
};

export default CheckoutProduct;
