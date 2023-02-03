import React from "react";

import redstar from "../../assets/redStar.svg";
import greystar from "../../assets/greyStar.svg";

function Notes({ notes }) {
    const stars = [1, 2, 3, 4, 5];
    return (
        <div className="rating">
            {/* boucle pour afficher une etoile par note */}
            {stars.map((star) =>
                notes >= star ? (
                    <img
                        key={star.toString()}
                        className="rating__icon"
                        src={redstar}
                        alt=""
                    />
                ) : (
                    <img
                        key={star.toString()}
                        className="rating__icon"
                        src={greystar}
                        alt=""
                    />
                )
            )}
        </div>
    );
};
export default Notes;