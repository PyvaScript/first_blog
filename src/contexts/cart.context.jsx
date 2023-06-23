import { createContext, useState, useEffect } from 'react';

const addItemToCart=(cartItems, itemToAdd)=>{
    //Search for match
    const existingCartItem=cartItems.find(
        (cartItem)=>cartItem.id===itemToAdd.id
    );
    //Match found
    if(existingCartItem){
        return cartItems.map(
            (cartItem)=>cartItem.id===itemToAdd.id ?
            { ...cartItem, quantity:cartItem.quantity+1 }
            : cartItem
        );
    }
    //No match found
    return [ ...cartItems, { ...itemToAdd, quantity:1 } ]
}

export const CartContext=createContext({
    isCartOpen:null,
    setIsCartOpen:()=>null,
    cartItems:[],
    setCartItems:()=>null,
    itemCount:null,
    setItemCount:()=>null,
})

export const CartProvider=({ children })=>{
    const [ isCartOpen, setIsCartOpen ]=useState(false);
    const [ cartItems, setCartItems ]=useState([]);
    const [ itemCount, setItemCount ]=useState(0);

    useEffect(()=>{
        const newItemCount=cartItems.reduce((totalItems, cartItem)=>totalItems+cartItem.quantity,0)
        setItemCount(newItemCount);
    });

    const addCartItem=(itemToAdd)=>{
        setCartItems(addItemToCart(cartItems, itemToAdd));
    }

    const value={ isCartOpen, setIsCartOpen, cartItems, itemCount, addCartItem };
    return <CartContext.Provider value={ value }>{ children }</CartContext.Provider>
}
