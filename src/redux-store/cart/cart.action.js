import { CART_ACTION_TYPES } from './cart.types.js';
import { createAction } from '../../utils/reducer/reducer.utils.js';

export const setIsCartOpen=(isCartOpen)=>createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen);

const removeItemFromCart=(cartItems, itemToRemove)=>{
    return cartItems.filter((cartItem)=>cartItem.id!==itemToRemove.id);
};

const reduceItemInCart=(cartItems, itemToReduce)=>{
    if(itemToReduce.quantity>1){
        return cartItems.map((cartItem)=>
            cartItem.id===itemToReduce.id ?
            { ...cartItem, quantity: cartItem.quantity-1 }
            : cartItem
        );
    };

    return removeItemFromCart(cartItems, itemToReduce);
};

const addItemToCart=(cartItems, itemToAdd)=>{
    const cartItemExists=cartItems.find((cartItem)=>cartItem.id==itemToAdd.id);

    if(cartItemExists){
        return cartItems.map((cartItem)=>
            cartItem.id===itemToAdd.id ?
            { ...cartItem, quantity:cartItem.quantity+1 }
            : cartItem
        );
    };

    return [ ...cartItems, { ...itemToAdd, quantity:1 } ];
};

export const removeCartItem=(cartItems, itemToRemove)=>{
    const newCartItems=removeItemFromCart(cartItems, itemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const reduceCartItem=(cartItems, itemToReduce)=>{
    const newCartItems=reduceItemInCart(cartItems, itemToReduce);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const addCartItem=(cartItems, itemToAdd)=>{
    const newCartItems=addItemToCart(cartItems, itemToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};















// import { CART_ACTION_TYPES } from "./cart.types.js";
// import { createAction } from "../../utils/reducer/reducer.utils.js";

// export const setIsCartOpen=(isCartOpen)=>createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,isCartOpen);

// export const setCartItems=(cartItems)=>createAction(CART_ACTION_TYPES.SET_CART_ITEMS,cartItems);
