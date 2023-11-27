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
import { PlayMusicMain, StopMusicMain, UpdateMusicVolume } from "../../Audio/playMusic";
import { UpdateFXVolume } from "../../Audio/playSound";


export default function MainGameComponent() {
    const { playerState, setPlayerState } = usePlayerContext();  // with this line of code, this component can access the global player state
    const { worldState, setWorldState } = useWorldContext();
    const { utilState, setUtilState } = useUtilContext();
    const navigate = useNavigate();

    useEffect(() => {
        UpdateMusicVolume(utilState);
        UpdateFXVolume(utilState);
    }, [utilState]);

    useEffect(() => {
        PlayMusicMain();

        return () => StopMusicMain();
    }, []);

    const backToMainMenu = () => {
        navigate("/");
    }

    const toSettings = () => {
        navigate("/settings");
    }

    const nextDay = async () => {
        await NewDay(worldState, setWorldState, playerState, setPlayerState, utilState);
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
                    Add Notification
                </button>
                <button onClick={backToMainMenu}>Return To Main Menu</button>
                <button onClick={toSettings}>Settings</button>
            </div>
            <div className="bottom-right-button">
                <button onClick={nextDay}>Change day</button>
            </div>
        </div>
    );
}