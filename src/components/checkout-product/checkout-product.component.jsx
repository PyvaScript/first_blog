// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context.jsx';

import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../redux-store/cart/cart.selector.js';

import { addCartItem, reduceCartItem, removeCartItem } from '../../redux-store/cart/cart.action.js';

import { CheckoutProductContainer, TextContainer, TextContainerInner, RemoveButton } from './checkout-product.styles.jsx';

const CheckoutProduct=({ product })=>{
    const { name, imageURL, price, quantity }=product;
    // const { addCartItem, reduceCartItem, removeCartItem }=useContext(CartContext);

    const cartItems=useSelector(selectCartItems);

    const dispatch=useDispatch();

    return (
        <>
            <CheckoutProductContainer>
                <div className="image-container">
                    <img src={ imageURL } alt={ name } className="image" />
                </div>
                <TextContainer>
                    <TextContainerInner>{ name }</TextContainerInner>
                </TextContainer>
                <TextContainer>
                    <TextContainerInner>
                        <span className="quantity-adjust-arrow" onClick={ ()=>{ dispatch(addCartItem( cartItems, product )) } }>↑</span>
                        {
                            //<span onClick={ ()=> addCartItem( product )}>&#10094;</span>
                        }
                        <span className="quantity">{ quantity }</span>
                        {
                            //<span onClick={ ()=> reduceCartItem( product ) }>&#10095</span>
                        }
                        <span className="quantity-adjust-arrow" onClick={ ()=>{ dispatch(reduceCartItem( cartItems, product )) } }>↓</span>
                    </TextContainerInner>
                </TextContainer>
                <TextContainer>
                    <TextContainerInner>${ price }</TextContainerInner>
                </TextContainer>
                <TextContainer>
                    <TextContainerInner>
                        <RemoveButton onClick={ ()=>{ dispatch(removeCartItem( cartItems, product )) } }>&#10005;</RemoveButton>
                    </TextContainerInner>
                </TextContainer>
            </CheckoutProductContainer>
        </>
    )
};

export default CheckoutProduct;
/*


import { useContext } from 'react';
import { CartContext } from "../../contexts/cart.context.jsx";

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
                        {
                            //<span onClick={ ()=> addCartItem( product)}>&#10094;</span>
                        }
                        <span className="quantity">{ quantity }</span>
                        {
                            //<span onClick={ ()=> reduceCartItem(product)}>&#10095;</span>
                        }
                        <span className="quantity-adjust-arrow" onClick={ ()=>{ reduceCartItem( product ) } }>↓</span>
                    </span>
                </div>
                <div className="text-container">
                    <span className="text-container-inner">{ price }</span>
                </div>
                <div className="text-container">
                    <span className="text-container-inner"><span className="remove-button" onClick={ ()=>{ removeCartItem(product) } }>&#10005;</span></span>
                </div>
            </div>
        </>
    )
};

export default CheckoutProduct;
*/
