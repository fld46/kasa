import React from "react";



function Notes({ notes }) {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div >
            {/* boucle pour afficher une etoile par note */}
            {stars.map((star) =>
                notes >= star ? (
                    <div key={star.toString()}>x</div>


                ) : (
                    <div key={star.toString()}>0</div>
                )
            )}
        </div>
    );
};

export default Notes;