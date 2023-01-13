import React from "react";


function Footer() {
    const effectiveYear = new Date().getFullYear();
    return (
        <footer >
            <p>
                &copy;
                {effectiveYear} Kasa. All rights reserved
            </p>
        </footer>
    );
};

export default Footer;