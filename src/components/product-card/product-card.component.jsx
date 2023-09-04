// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context.jsx";

import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../redux-store/cart/cart.selector.js';

import { addCartItem } from '../../redux-store/cart/cart.action.js';

import { ProductCardContainer, ProductCardImage, ProductCardButton, ProductCardFooter } from "./product-card.styles.jsx";

const ProductCard=({ product })=>{
    // const { addCartItem }=useContext(CartContext);
    const dispatch=useDispatch();

    const { name, price, imageURL }=product;
    const cartItems=useSelector(selectCartItems);
    const addProductToCart=()=>{
        dispatch(addCartItem(cartItems, product));
    };
    return (
        <ProductCardContainer>
            <ProductCardImage src={ imageURL } alt={ name }/>
            <ProductCardFooter>
                <span className="name">{ name }</span>
                <span className="price">${ price }</span>
            </ProductCardFooter>
            <ProductCardButton onClick={ addProductToCart }>Add To Cart</ProductCardButton>
        </ProductCardContainer>
    )
};

export default ProductCard;

/*
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
import "./product-card.styles.scss";
import Button from "../button/button.component.jsx";

const ProductCard=({ product })=>{
    const { addCartItem }=useContext(CartContext);
    const { name, price, imageURL }=product;
    const addProductToCart=()=>{
        addCartItem(product);
    };
    return (
        <div className="product-card-container">
            <img src={ imageURL } alt={ name }/>
            <div className="footer">
                <span className="name">{ name }</span>
                <span className="price">${ price }</span>
            </div>
            <Button onClick={ addProductToCart }>Add to cart</Button>
        </div>
    )
};

export default ProductCard;
*/
