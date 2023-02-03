import React from "react";
import Image from "../../assets/logoap.png"


function Footer() {
    const effectiveYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <img src={Image} alt="logo" className="footer__logo" />
            <p className="footer__text">
                &copy;
                {effectiveYear} Kasa. All rights reserved
            </p>
        </footer>
    );
};

export default Footer;