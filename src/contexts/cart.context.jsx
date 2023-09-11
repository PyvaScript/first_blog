// import { createContext, useReducer } from "react";

// const removeItemFromCart=(cartItems, itemToRemove)=>{
//     return cartItems.filter((cartItem)=>cartItem.id!==itemToRemove.id);
// };

// const reduceItemInCart=(cartItems, itemToReduce)=>{
//     if(itemToReduce.quantity>1){
//         return cartItems.map((cartItem)=>
//             cartItem.id===itemToReduce.id ?
//             { ...cartItem, quantity: cartItem.quantity-1 }
//             : cartItem
//         );
//     };

//     return removeItemFromCart(cartItems, itemToReduce);
// };

// const addItemToCart=(cartItems, itemToAdd)=>{
//     const existingCartItem=cartItems.find((cartItem)=>cartItem.id===itemToAdd.id);

//     if(existingCartItem){
//         return cartItems.map((cartItem)=>
//             cartItem.id===itemToAdd.id ?
//             { ...cartItem, quantity: cartItem.quantity+1 }
//             : cartItem
//         );
//     };

//     return [ ...cartItems, { ...itemToAdd, quantity: 1 } ];
// };

// export const CartContext=createContext({
//     isCartOpen: false,
//     cartItems: [],
//     itemCount: 0,
//     totalOrderCost: 0,
// });

// export const CART_ACTION_TYPES={
//     SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
//     SET_CART_ITEMS: 'SET_CART_ITEMS',
// };

// const cartReducer=(state, action)=>{
//     const { type, payload }=action;

//     switch(type) {
//         case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//             return {
//                 ...state,
//                 isCartOpen: payload,
//             };

//         case CART_ACTION_TYPES.SET_CART_ITEMS:
//             const { newCartItems, newItemCount, newTotalOrderCost }=payload;

//             return {
//                 ...state,
//                 cartItems: newCartItems,
//                 itemCount: newItemCount,
//                 totalOrderCost: newTotalOrderCost
//             };

//         default:
//             return state;
//     };
// };

// const CART_INITIAL_STATE={
//     isCartOpen: false,
//     cartItems: [],
//     itemCount: 0,
//     totalOrderCost: 0,
// };

// export const CartProvider=({ children })=>{

//     const [ state, dispatcher ]=useReducer(cartReducer, CART_INITIAL_STATE);

//     const { isCartOpen, cartItems, itemCount, totalOrderCost }=state;

//     const setIsCartOpen=(newCartOpenState)=>{
//         dispatcher({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: newCartOpenState });
//     };

//     const updateCartItems=(newCartItems)=>{
//         const newItemCount=newCartItems.reduce((total,item)=>total+item.quantity,0);

//         const newTotalOrderCost=newCartItems.reduce((total,item)=>total+item.price*item.quantity,0);

//         const finalPayload={
//             newCartItems,
//             newItemCount,
//             newTotalOrderCost
//         };

//         dispatcher({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: finalPayload });
//     };

//     const removeCartItem=(itemToRemove)=>{
//         const newCartItems=removeItemFromCart(cartItems, itemToRemove);
//         updateCartItems(newCartItems);
//     };

//     const reduceCartItem=(itemToReduce)=>{
//         const newCartItems=reduceItemInCart(cartItems, itemToReduce);
//         updateCartItems(newCartItems);
//     };

//     const addCartItem=(itemToAdd)=>{
//         const newCartItems=addItemToCart(cartItems, itemToAdd);
//         updateCartItems(newCartItems);
//     };

//     const value={ isCartOpen, setIsCartOpen, cartItems, removeCartItem, reduceCartItem, addCartItem, itemCount, totalOrderCost }
//     return <CartContext.Provider value={ value }>{ children }</CartContext.Provider>
// };
