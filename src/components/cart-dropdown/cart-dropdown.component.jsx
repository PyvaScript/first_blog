import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context.jsx";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component.jsx";
import { CartDropdownContainer, CartItems, EmptyCartMessage } from "./cart-dropdown.styles.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";

const CartDropdown=()=>{

    const { isCartOpen, setIsCartOpen, cartItems }=useContext(CartContext);

    const navigate=useNavigate();
    
    const goToCheckoutHandler=()=>{
        console.log(!isCartOpen)
        setIsCartOpen(!isCartOpen);
        navigate("/checkout");
    };

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map((cartItem)=>(
                        <CartItem key={ cartItem.id } cartItem={ cartItem }/>
                    ))) : (
                        <EmptyCartMessage>Your Cart Is Empty</EmptyCartMessage>
                    )
                }
            </CartItems>
            <Button onClick={ goToCheckoutHandler }>Go To Checkout</Button>
        </CartDropdownContainer>
    )
};

export default CartDropdown;
