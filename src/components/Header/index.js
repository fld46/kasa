import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/logo.png";
function Header() {
    const [liens, setLiens] = useState(false);
    let classLiensA = "navbar__links__style";
    let classLiensB = "navbar__links__style";
    if (liens) {
        classLiensB += " underline";
    } else {
        classLiensA += " underline";
    }
    const location = window.location.href;
    if (location.endsWith('about')) {
        if (!liens) {
            setLiens(true)
        }
    }

    return (
        <nav className="navbar">
            <NavLink to="/">
                <img src={Logo} alt="Logo" className="navbar__img" />
            </NavLink>
            <div className="navbar__links">
                <NavLink to="/" className={classLiensA} onClick={() => setLiens(false)}>
                    Accueil
                </NavLink>
                <NavLink to="/about" className={classLiensB} onClick={() => setLiens(true)}>
                    About
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;