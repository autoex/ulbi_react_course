import React from 'react';
import {NavLink} from "react-router-dom";

const NavMenu = () => {
    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <NavLink className="nav-link" to={'/'} exact>Main</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to={'/about'}>About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to={'/posts'}>Posts</NavLink>
            </li>
        </ul>
    );
};

export default NavMenu;