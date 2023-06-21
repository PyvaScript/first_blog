import { useContext } from 'react';
import { CartContext } from "../../contexts/cart.context.jsx";
import Button from "../button/button.component.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";
import "./cart-dropdown.styles.scss";

const CartDropdown=()=>{
    const { cartItems }=useContext(CartContext);
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
            <Button>Go To Checkout</Button>
        </div>
    )
};

export default CartDropdown;
