import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../context";

const NavMenu = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    return (
        <div className='navBar'>
           {isAuth && <ul className="nav nav-pills mb-3">
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/posts'}>Posts</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/about'}>About</NavLink>
                </li>


            </ul>}
            {isAuth &&
            <NavLink onClick={() => setIsAuth(false)} className="nav-link" to={'/about'}>Logout</NavLink>
            }</div>
    );
};

export default NavMenu;