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
import { openTheShop } from "../../Logic/Buying";
import { SaveToStorage } from "../../Save/db";


export default function MainGameComponent() {
    const { playerState, setPlayerState } = usePlayerContext();
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
        SaveToStorage(playerState, worldState, utilState, setUtilState);
        navigate("/");
    }

    const toSettings = () => {
        navigate("/settings");
    }

    const nextDay = async () => {
        await NewDay(worldState, setWorldState, playerState, setPlayerState, utilState, setUtilState);
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
                <button onClick={backToMainMenu}>Save And Exit</button>
                <button onClick={toSettings}>Settings</button>
            </div>
            <div className="bottom-right-button">
                <button onClick={nextDay}>Change day</button>
                
                
            </div>
            <div className="second-button">
                <button onClick={() => openTheShop(setWorldState)}>Open the shop </button>
            </div>
        </div>
    );
}