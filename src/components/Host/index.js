import React from "react";

function Host({ host }) {
    const hostSplited = host.name.split(" ");
    const [name, lastname] = hostSplited;

    return (
        <div>
            <div>
                <p>{name.trim()}</p>
                <p>{lastname.trim()}</p>
            </div>
            <img src={host.picture} alt="" />
        </div>


    )

}

export default Host;