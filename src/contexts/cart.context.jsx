import { createContext, useState, useEffect } from 'react';

const removeItemFromCart=(cartItems, itemToRemove)=>{
    return cartItems.filter((cartItem)=>cartItem.id!=itemToRemove.id);
}

const reduceItemInCart=(cartItems, itemToReduce)=>{
    if(itemToReduce.quantity>1){
        return cartItems.map(
            (cartItem)=>cartItem.id===itemToReduce.id ?
            { ...cartItem, quantity:cartItem.quantity-1 }
            : cartItem
        )
    };
    return removeItemFromCart(cartItems, itemToReduce);
}

const addItemToCart=(cartItems, itemToAdd)=>{
    //Search for match
    const existingCartItem=cartItems.find(
        (cartItem)=>cartItem.id===itemToAdd.id
    )
    //Match found
    if(existingCartItem){
        return cartItems.map(
            (cartItem)=>cartItem.id===itemToAdd.id ?
            { ...cartItem, quantity:cartItem.quantity+1 }
            : cartItem
        )
    }
    //No match found
    return [ ...cartItems, { ...itemToAdd, quantity:1 }]
}

export const CartContext=createContext({
    isCartOpen:null,
    setIsCartOpen:()=>null,
    cartItems:null,
    setCartItems:()=>null,
    itemCount:null,
    setItemCount:()=>null,
    totalOrderCost:null,
    setTotalOrderCost:()=>null,
});

export const CartProvider=({ children })=>{
    const [ isCartOpen, setIsCartOpen ]=useState(false);
    const [ cartItems, setCartItems ]=useState([]);
    const [ itemCount, setItemCount ]=useState(0);
    const [ totalOrderCost, setTotalOrderCost ]=useState(0);

    useEffect(()=>{
        const newItemCount=cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
        setItemCount(newItemCount);
    },[ cartItems ]);

    useEffect(()=>{
        const newTotalOrderCost=cartItems.reduce((total,cartItem)=>total+(cartItem.price*cartItem.quantity),0);
        setTotalOrderCost(newTotalOrderCost);
    },[ cartItems ]);

    const addCartItem=(itemToAdd)=>{
        setCartItems(addItemToCart(cartItems, itemToAdd));
    }

    const reduceCartItem=(itemToReduce)=>{
        setCartItems(reduceItemInCart(cartItems, itemToReduce));
    }

    const removeCartItem=(itemToRemove)=>{
        setCartItems(removeItemFromCart(cartItems, itemToRemove));
    }
    
    const value={ isCartOpen, setIsCartOpen, cartItems, itemCount, addCartItem, reduceCartItem, removeCartItem, totalOrderCost };
    return <CartContext.Provider value={ value }>{ children }</CartContext.Provider>
};
