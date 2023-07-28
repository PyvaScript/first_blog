import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from "../../contexts/cart.context.jsx";
import Button from "../button/button.component.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles.jsx";
//import "./cart-dropdown.styles.scss";

const CartDropdown=()=>{
    const { cartItems, isCartOpen, setIsCartOpen }=useContext(CartContext);
    const navigate=useNavigate();
    const goToCheckoutHandler=()=>{
        setIsCartOpen(!isCartOpen);
        navigate('/checkout')
    }
    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.map(
                        (cart_item)=>(
                            <CartItem key={ cart_item.id } cartItem={ cart_item }/>
                        )
                    )
                }
            </CartItems>
            <Button onClick={ goToCheckoutHandler }>Go To Checkout</Button>
        </CartDropdownContainer>
    )
};

export default CartDropdown;
