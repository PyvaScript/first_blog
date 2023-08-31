





// import { createSelector } from 'reselect';

// const selectIsCartOpenReducer=(state)=>state.cart.isCartOpen;

// export const selectIsCartOpen=createSelector(
//     [ selectIsCartOpenReducer ],
//     (isCartOpen)=>!isCartOpen
// );

// const selectCartItemsReducer=(state)=>state.cart.cartItems;

// export const selectCartItems=createSelector(
//     [ selectCartItemsReducer ],
//     (cartItems)=>{
//         const itemCount=cartItems.reduce((acc, item)=>acc=acc+item.quantity,0);
//         const totalOrderCost=cartItems.reduce((acc, item)=>acc=acc+item.price*item.quantity)
//         return { cartItems, itemCount, totalOrderCost };
//     }
// );
