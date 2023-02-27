import React from "react";

const Mainbanner = ({ image, title }) => {
    return (
        <div className="homeBannerAccueil">
            <img src={image} alt="" className="homeBannerAccueil__img" />
            <div className="homeBannerAccueil__overlay"></div>
            <h2 className="homeBannerAccueil__title">{title}</h2>
        </div>
    );
};

export default Mainbanner;