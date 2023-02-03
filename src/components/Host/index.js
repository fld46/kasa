import React from "react";

function Host({ host }) {
    const hostSplited = host.name.split(" ");
    const [name, lastname] = hostSplited;

    return (
        <div className="host">
            <div className="host__name">
                <p className="host__firstname">{name.trim()}</p>
                <p className="host__lastname">{lastname.trim()}</p>
            </div>
            <img src={host.picture} alt="" className="host__picture" />
        </div>


    )

}

export default Host;