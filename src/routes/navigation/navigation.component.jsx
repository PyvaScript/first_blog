import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context.jsx';
import { SignOutUser } from '../../utils/firebase/firebase.utils.js';

const Nav=()=>{
    const { currentUser }=useContext(UserContext);
    const signOutHandler=async()=>{await SignOutUser()}
    return (
        <div style={{ textAlign:'center' }}>
            <h1><Link to="/" style={{ textDecoration:"none",color:'orange' }}>Welcome to the Orange Blog</Link></h1>
            <p className="colorBlack">The most relevant industry news powered by The Orange Mouse</p>
            {
                currentUser ? (
                    <p onClick={ signOutHandler }>Sign Out</p>
                ) : (
                    <p><Link to="/authentication" style={{ textDecoration:"none",color:"orange"}}>Sign In</Link></p>
                )
            }
            <Outlet />
        </div>
    )
};

export default Nav;