import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/logo.png";
function Header() {
    return (
        <nav className="navbar">
            <NavLink to="/">
                <img src={Logo} alt="Logo" className="navbar__img" />
            </NavLink>
            <div className="navbar__links">
                <NavLink to="/" className="navbar__links__style">
                    Accueil
                </NavLink>
                <NavLink to="/about" className="navbar__links__style">
                    About
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;