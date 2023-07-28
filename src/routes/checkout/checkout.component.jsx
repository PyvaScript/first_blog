import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
import CheckoutProduct from "../../components/checkout-product/checkout-product.component.jsx";

import { CheckoutContainer, CheckoutHeadingContainer, TotalOrderCost } from "./checkout.styles.jsx";

const Checkout=()=>{
    const { cartItems, totalOrderCost }=useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeadingContainer>
                <span>Product</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </CheckoutHeadingContainer>
            <hr/>
            {
                cartItems.map(
                    (cartItem)=>(
                        <div key={ cartItem.id }>
                            <CheckoutProduct key={ cartItem.id } product={ cartItem } />
                        </div>
                    )
                )
            }
            <TotalOrderCost>Total: ${ totalOrderCost }</TotalOrderCost>
        </CheckoutContainer>
    )
};

export default Checkout;


/*
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
import CheckoutProduct from "../../components/checkout-product/checkout-product.component.jsx";
import "./checkout.styles.scss";

const Checkout=()=>{
    const { cartItems, totalOrderCost }=useContext(CartContext);
    return (
        <div className="checkout-container">
            <div className="checkout-heading-container">
                <span>Product</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </div>
            <hr />
            {
                cartItems.map(
                    (cartItem)=>(
                        <div key={ cartItem.id }>
                            <CheckoutProduct key={ cartItem.id } product={ cartItem } />
                        </div>
                    )
                )
            }
            <p className="total-order-cost">Total: ${ totalOrderCost }</p>
        </div>
    )
};

export default Checkout;
*/
