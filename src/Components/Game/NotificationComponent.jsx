import React from "react";
import { useWorldContext } from "../../State/WorldContextProvider";

export const NotificationComponent = () => {
    const { worldState, setWorldState } = useWorldContext();

    const Delete = (index) => {
        
        const updatedNotifications = [...worldState.notification];
        updatedNotifications.splice(index, 1);

        setWorldState({ ...worldState, notification: updatedNotifications });
    };

    return (
        <>
        <div className="Notification-Center">
        <ul>
            {worldState.notification.map((notif, index) => (
                <li key={index}>
                         {notif} 
                    <button className="Button-Accept-Offer Font-Medieval" onClick={() => Delete(index)}>Delete</button>
                </li>
            ))}
        </ul>
        </div>
        </>
    );
}