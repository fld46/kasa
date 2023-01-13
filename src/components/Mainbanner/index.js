import React from "react";

const Mainbanner = ({ image, title }) => {
    return (
        <div >
            <img src={image} alt="" />
            <h2 >{title}</h2>
        </div>
    );
};

export default Mainbanner;