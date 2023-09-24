// import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { selectIsCartOpen } from "../../redux-store/cart/cart.selector.js";

import { signOutStart } from '../../redux-store/user/user.action.js';

import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
import { selectCurrentUser } from "../../redux-store/user/user.selector.js";
import { NavigationContainer } from "./navigation.styles.jsx";
import "./navigation.styles.scss";

// import { UserContext } from '../../contexts/user.context.jsx';
// import { CartContext } from "../../contexts/cart.context.jsx";
// import { SignOutUser } from '../../utils/firebase/firebase.utils.js';

const Nav=()=>{
    const isCartOpen=useSelector(selectIsCartOpen);
    const currentUser=useSelector(selectCurrentUser);
    const dispatch=useDispatch();
    const signOutHandler=async()=> {
        dispatch(signOutStart());
    };

    // const { currentUser }=useContext(UserContext);
    // const { isCartOpen }=useContext(CartContext);
    // const currentUser=useSelector((state)=>state.user.currentUser);
    // const signOutHandler=async()=>{await SignOutUser()}
    return (
        <>            
            <div className="nav_container">
                <div className="nav_item site_logo"></div>
                <div className="nav_item nav_intro">
                    <h1><Link to="/" className="link_to_main">Welcome to the Orange Blog</Link></h1>
                    <p className="nav_sub_heading">The most relevant industry news powered by The Orange Mouse</p>
                </div>
                <div className="nav_item personal">
                    <p className="shop"><Link to="/shop">Shop</Link></p>
                    {
                        currentUser ? (
                            <p onClick={ signOutHandler } className="authentication nav_sign_out">Sign Out</p>
                        ) : (
                            <p><Link to="/authentication" className="authentication nav_sign_in">Sign In</Link></p>
                        )
                    }
                    <CartIcon/>
                </div>
                {
                    isCartOpen && <CartDropdown />
                }
            </div>
            <Outlet />
        </>
    )
};

export default Nav;