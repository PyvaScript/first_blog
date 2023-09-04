import { createSelector } from 'reselect';

// The code below is used to access the cart slice of the root reducer
export const selectCartReducer=(state)=>state.cart;

export const selectIsCartOpen=createSelector(
    [ selectCartReducer ],
    (cart)=>cart.isCartOpen
);

export const selectCartItems=createSelector(
    [ selectCartReducer ],
    (cart)=>cart.cartItems
);

export const selectItemCount=createSelector(
    [ selectCartItems ],
    (cartItems)=>cartItems.reduce((acc, item)=>acc+item.quantity, 0)
);

export const selectTotalOrderCost=createSelector(
    [ selectCartItems ],
    (cartItems)=>cartItems.reduce((acc, item)=>acc+item.price*item.quantity, 0)
);
