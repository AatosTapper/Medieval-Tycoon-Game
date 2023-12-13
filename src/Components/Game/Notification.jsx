import React from "react";

import "../../CSS/Notification.css"

export const Notification = ({ text, deleteFunc, index }) => {
    return (
        <div className="Full-Notification">
            <p className="Notification-Text">{text}</p>
            <button className="Button-Accept-Offer Font-Medieval" onClick={() => deleteFunc(index)}>Delete</button>
        </div>
    );
}