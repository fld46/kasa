import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/logo.png";
function Header() {
    return (
        <nav >
            <NavLink to="/">
                <img src={Logo} alt="Logo" />
            </NavLink>
            <div >
                <NavLink to="/" >
                    Accueil
                </NavLink>
                <NavLink to="/about" >
                    About
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;