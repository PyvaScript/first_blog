// import { useContext } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { selectItemCount, selectIsCartOpen } from '../../redux-store/cart/cart.selector.js';

import{ setIsCartOpen } from '../../redux-store/cart/cart.action.js';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles.jsx';

const CartIcon=()=>{

    // const { isCartOpen, setIsCartOpen, itemCount }=useContext(CartContext);

    const dispatch=useDispatch();

    const itemCount=useSelector(selectItemCount);

    const isCartOpen=useSelector(selectIsCartOpen);

    const toggleIsCartOpen=()=>dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={ toggleIsCartOpen }>
            <ShoppingIcon/>
            <ItemCount>{ itemCount }</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;




// import { useContext } from 'react';

// import { selectIsCartOpen, selectItemCount } from '../../redux-store/cart/cart.selector.js';
// import { setIsCartOpen } from '../../redux-store/cart/cart.action.js';

// import { useSelector, useDispatch } from 'react-redux';
// import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles.jsx';

// const CartIcon=()=>{

//     // const { isCartOpen, setIsCartOpen, itemCount }=useContext(CartContext);

//     const { isCartOpen }=useSelector(selectIsCartOpen);
//     const { itemCount }=useSelector(selectItemCount);

//     const toggleIsCartOpen=()=>useDispatch(setIsCartOpen(!isCartOpen));

//     return (
//         <CartIconContainer onClick={ toggleIsCartOpen }>
//             <ShoppingIcon/>
//             <ItemCount>{ itemCount }</ItemCount>
//         </CartIconContainer>
//     )

// };
// export default CartIcon;



// import { useDispatch, useSelector } from 'react-redux';

// import { selectIsCartOpen, selectItemCount } from '../../redux-store/cart/cart.selector.js';
// import { setIsCartOpen } from '../../redux-store/cart/cart.action.js';

// // import { useContext } from "react";

// // import { CartContext } from "../../contexts/cart.context.jsx";

// import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles.jsx";

// const CartIcon=()=>{

//     const { isCartOpen }=useSelector(selectIsCartOpen);

//     // const { isCartOpen, setIsCartOpen, itemCount }=useContext(CartContext);

//     const toggleIsCartOpen=()=>setIsCartOpen(!isCartOpen);

//     return (
//         <CartIconContainer onClick={ toggleIsCartOpen }>
//             <ShoppingIcon/>
//             <ItemCount>{ itemCount }</ItemCount>
//         </CartIconContainer>
//     )
// };

// export default CartIcon;
