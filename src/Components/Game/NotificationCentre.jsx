import React from "react";

import { useWorldContext } from "../../State/WorldContextProvider";
import { Notification } from "./Notification";
import "../../CSS/Notification.css"

const backgroundStyle = {
    backgroundImage: "url('src/images/notificationWindow.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    imageRendering: "pixelated",
};

const dimensions = {
    width: "300px",
    height: "600px",
};

export const NotificationCentre = () => {
    const maxNotifs = 10;
    const { worldState, setWorldState } = useWorldContext();

    const Delete = (index) => {
        const updatedNotifications = [...worldState.notification];
        updatedNotifications.splice(index, 1);
        setWorldState({ ...worldState, notification: updatedNotifications });
    };

    if (worldState.notification.length > maxNotifs ){
        const nl = [...worldState.notification];
        nl.splice(0, 1);
        setWorldState({ ...worldState, notification: nl });
    }

    return (
        <div style={{ ...dimensions, ...backgroundStyle }}>
            <div className="Notification-Centre">
                <ul className="ul-notif">
                    {worldState.notification.map((notif, index) => (
                        <li key={index}>
                            <Notification text={notif} deleteFunc={Delete} index={index} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};