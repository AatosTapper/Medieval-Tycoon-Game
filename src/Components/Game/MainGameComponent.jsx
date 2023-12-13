import React, { useEffect, useState } from "react";
import { usePlayerContext } from "../../State/PlayerContextProvider";
import { useWorldContext } from "../../State/WorldContextProvider";
import { useUtilContext } from "../../State/UtilContextProvider";
import { useNavigate } from "react-router-dom";
import NewDay from "../../Logic/DayCycle";
import "../../CSS/buttons.css";
import "../../CSS/index.css";
import ProfileInfo from "../Game/ProfileInfo";
import { NotificationCentre } from "./NotificationCentre";
import { Newspaper } from "./Newspaper";
import { AddNotification } from "../../Logic/NewNotification";
import { ViewSwitcher, ViewSelector } from "./ViewSwitcher";
import { PlayMusicMain, StopMusicMain, UpdateMusicVolume } from "../../Audio/playMusic";
import { UpdateFXVolume } from "../../Audio/playSound";
import { switchShop } from "../../Logic/Buying";
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
        navigate("/");
        SaveToStorage(playerState, worldState, utilState, setUtilState);
    }

    const toSettings = () => {
        navigate("/settings");
    }

    const nextDay = async () => {
        await NewDay(worldState, setWorldState, playerState, setPlayerState, utilState, setUtilState);
    }

    return (
        <div className="Font-Medieval Game container">
            <div className="Left-Ui">
                <ProfileInfo />
                <div className="Left-Ui-Bottom">
                    <Newspaper />
                    <div style={{ gridColumn: 'span 1', justifySelf: 'end' }}>
                        <ViewSelector />
                    </div>
                </div>
            </div>
            <div className="Middle-Ui">
                <ViewSwitcher />  
            </div>
            <div className="Right-Ui">
                <NotificationCentre />

                <button onClick={backToMainMenu}>Save And Exit</button>
                <button onClick={toSettings}>Settings</button>
                <div className="bottom-right-button">
                    <button onClick={nextDay}>Change day</button>
                </div>
                <div className="second-button">
                    <button onClick={() => switchShop(setWorldState)}>{worldState.openShop ? "Close Shop" : "Open Shop"}</button>
                </div>
            </div>
        </div>
    );
}