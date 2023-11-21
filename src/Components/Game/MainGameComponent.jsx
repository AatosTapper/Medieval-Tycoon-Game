import React, { useEffect, useState } from "react";
import { usePlayerContext } from "../../State/PlayerContextProvider";
import { useWorldContext } from "../../State/WorldContextProvider";
import { useUtilContext } from "../../State/UtilContextProvider";
import { useNavigate } from "react-router-dom";
import NewDay from "../../Logic/DayCycle";
import "../../CSS/buttons.css";
import "../../CSS/index.css";
import ProfileInfo from "../Game/ProfileInfo";
import { NotificationComponent } from "./NotificationComponent";
import { Newspaper } from "./Newspaper";
import { AddNotification } from "../../Logic/NewNotification";
import { ViewSwitcher, ViewSelector } from "./ViewSwitcher";
import { PlayMusicMain, StopMusicMain } from "../../Audio/playMusic";


export default function MainGameComponent() {
    const { playerState, setPlayerState } = usePlayerContext();  // with this line of code, this component can access the global player state
    const { worldState, setWorldState } = useWorldContext();
    const { utilState, setUtilState } = useUtilContext();
    const navigate = useNavigate();

    useEffect(() => {
        PlayMusicMain();

        return () => StopMusicMain();
    }, []);

    const backToMainMenu = () => {
        navigate("/");
    }

    const nextDay = () => {
        NewDay(worldState, setWorldState, playerState, setPlayerState);
    }

    return (
        <div className="Font-Medieval Game container">

                <div className="item1">
            <ProfileInfo />
            <Newspaper />

            <div style={{ gridColumn: 'span 1', justifySelf: 'end' }}>
            <ViewSelector />
           
            </div>
            
            </div>

            <div className="item23">
            <ViewSwitcher />  
            </div>

           
            
            
           <div className="item4">
            <NotificationComponent />
            <button onClick={() => AddNotification(setWorldState,"Nouvelle notification")}>
                Ajouter Notification
            </button>
            <button onClick={backToMainMenu} >Return To Main Menu</button>
           
            </div>

            <div className="bottom-right-button">
            
            <button onClick={nextDay}>Change day</button>
            </div>




        </div>
    );
}