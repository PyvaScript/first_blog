import { Outlet, Link } from 'react-router-dom';

const Nav=()=>{
    return (
        <div style={{ textAlign:'center'}}>
            <h1><Link to="/" style={{textDecoration:'none',color:'orange'}}>Welcome to the Orange Blog</Link></h1>
            <p className="colorBlack">The most relevant industry news powered by The Orange Mouse</p>
            <Outlet/>
        </div>
    )
};

export default Nav;