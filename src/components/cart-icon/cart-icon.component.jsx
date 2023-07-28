import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles.jsx";
//import "./cart-icon.styles.scss";

const CartIcon=()=>{
    const { isCartOpen, setIsCartOpen, itemCount }=useContext(CartContext);
    const toggleIsCartOpen=()=>setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={ toggleIsCartOpen }>
            <ShoppingIcon/>
            <ItemCount>{ itemCount }</ItemCount>
        </CartIconContainer>
    )
};

export default CartIcon;
