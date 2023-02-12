import React, { useState, useEffect } from "react";

const Collapse = ({ title, content }) => {
    const [open, setOpen] = useState(false);
    const isCollapse = () => {
        setOpen(!open);
    };

    let classAnim = "";
    if (open) {
        classAnim += " rotate";
    } else {
        classAnim = "collapse__arrow";
    }

    return (
        <div className="collapse ">
            <button type="button" className="collapse__button" onClick={isCollapse}>
                {title}
                <p className={classAnim}>&lt;</p>
            </button>
            {
                open && (
                    <div >
                        {Array.isArray(content) ? (
                            <ul className="collapse__list">
                                {content.map((equipment, index) => (
                                    <li key={index} className="collapse__list-element">
                                        {equipment}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="collapse__text">{content}</p>
                        )}
                    </div>
                )
            }
        </div>
    );
};

export default Collapse;