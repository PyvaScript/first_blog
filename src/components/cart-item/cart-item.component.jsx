import { CartItemContainer, CartItemDetails } from "./cart-item.styles.jsx";
//import "./cart-item.styles.scss";

const CartItem=({ cartItem })=>{
    const { name, imageURL, price, quantity }=cartItem;
    return (
        <CartItemContainer>
            <img src={ imageURL } alt={ name }/>
            <CartItemDetails>
                <span className="name">{ name }</span>
                <span className="price">{ quantity } x ${ price }</span>
            </CartItemDetails>
        </CartItemContainer>
    )
};

export default CartItem;
