import { CART_ACTION_TYPES } from "./cart.types.js";
import { createAction } from "../../utils/reducer/reducer.utils.js";

export const setIsCartOpen=(isCartOpen)=>createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,isCartOpen);

export const setCartItems=(cartItems)=>createAction(CART_ACTION_TYPES.SET_CART_ITEMS,cartItems);
