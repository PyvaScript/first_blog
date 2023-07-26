import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from "../../contexts/cart.context.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";
import "./cart-dropdown.styles.scss";

const CartDropdown=()=>{
    const { cartItems }=useContext(CartContext);
    const navigate=useNavigate();
    const goToCheckoutHandler=()=>{
        navigate('/checkout')
    }
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {
                    cartItems.map(
                        (cart_item)=>(
                            <CartItem key={ cart_item.id } cartItem={ cart_item }/>
                        )
                    )
                }
            </div>
            <Button button_type={ BUTTON_TYPE_CLASSES.base } onClick={ goToCheckoutHandler }>Go To Checkout</Button>
        </div>
    )
};

export default CartDropdown;
