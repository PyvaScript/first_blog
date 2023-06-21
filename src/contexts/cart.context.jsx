import { createContext, useState } from 'react';

const addCartItem=(cartItems, productToAdd)=>{
    //Search for item
    const existingCartItem=cartItems.find(
        (cartItem)=>cartItem.id===productToAdd.id
    );
    //Item was matched
    if(existingCartItem){
        console.log("Existing item found");
        console.log(cartItems);
        return cartItems.map(
            (cartItem)=>cartItem.id===productToAdd.id ? 
            { ...cartItem, quantity: cartItem.quantity+1}
            : cartItem
        );
    }
    //No items were matched
    return [...cartItems, { ...productToAdd, quantity:1 }]
}

export const CartContext=createContext({
    isCartOpen:null,
    setIsCartOpen:()=>null,
    cartItems:[],
    setCartItems:()=>null,
});

export const CartProvider=({ children })=>{
    const [ isCartOpen, setIsCartOpen ]=useState(false);
    const [ cartItems, setCartItems ]=useState([]);
    const addItemToCart=(productToAdd)=>{
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    const value={ isCartOpen, setIsCartOpen, cartItems, addItemToCart };
    return <CartContext.Provider value={ value }>{ children }</CartContext.Provider>
};
