import React from "react";
import Image from "../../assets/logoap.png"


function Footer() {
    const effectiveYear = new Date().getFullYear();
    return (
        <footer >
            <img src={Image} alt="logo" />
            <p>
                &copy;
                {effectiveYear} Kasa. All rights reserved
            </p>
        </footer>
    );
};

export default Footer;