import React, { useState } from "react";
import { usePlayerContext } from "../../State/PlayerContextProvider";
import { useWorldContext } from "../../State/WorldContextProvider";
import { useUtilContext } from "../../State/UtilContextProvider";
import { useNavigate } from "react-router-dom";
import NewDay from "../../Logic/DayCycle";
import "../../CSS/index.css";
import ProfileInfo from "../Game/ProfileInfo";
import { NotificationComponent } from "./NotificationComponent";
import OfferComponent from "./OfferSystem";
import { Newspaper } from "./Newspaper";
import { UpgradeComponent } from "./Upgrade";
import { AddNotification } from "../../Logic/NewNotification";


import DayCycle from "./DayCycle";

// Before looking at this, go to the app component and make sure it makes sense.

export default function MainGameComponent() {
    const { playerState, setPlayerState } = usePlayerContext();  // with this line of code, this component can access the global player state
    const { worldState, setWorldState } = useWorldContext();
    const { utilState, setUtilState } = useUtilContext();
    const navigate = useNavigate();

    const backToMainMenu = () => {
        navigate("/");
    }

    const nextDay = () => {
        NewDay(worldState, setWorldState, playerState, setPlayerState);
    }

    return (
        <div className="Font-Medieval Game">
            <h1>Game page</h1>
            
            <ProfileInfo />
            <NotificationComponent />
            <Newspaper />
            <button onClick={backToMainMenu}>Return To Main Menu</button>
            <button onClick={nextDay}>Change day</button>
            <button onClick={() => AddNotification(worldState, setWorldState,"Nouvelle notification")}>
                Ajouter Notification
            </button>
            <OfferComponent />
            <UpgradeComponent />
            
            
            
            <pre>{JSON.stringify(worldState, null, 4)}</pre>
        </div>
    );
}