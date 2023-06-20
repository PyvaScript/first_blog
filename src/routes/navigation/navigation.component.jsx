import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context.jsx';
import { SignOutUser } from '../../utils/firebase/firebase.utils.js';
import "./navigation.styles.scss";
import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";

const Nav=()=>{
    const { currentUser }=useContext(UserContext);
    const signOutHandler=async()=>{await SignOutUser()}
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
            </div>
            <Outlet />
        </>
    )
};

export default Nav;