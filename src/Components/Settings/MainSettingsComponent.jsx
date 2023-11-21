import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUtilContext } from "../../State/UtilContextProvider";
import { UpdateFXVolume } from "../../Audio/playSound";
import { UpdateMusicVolume } from "../../Audio/playMusic";

export const MainSettingsComponent = ({lastPage}) => {
    const { utilState, setUtilState } = useUtilContext();
    const navigate = useNavigate();

    const toMenu = () => {
        navigate("/"); 
    }

    const toGame = () => {
        navigate("/game"); 
    }

    const setMusicVolume = (event) => {
        setUtilState(oldState => ({
            ...oldState,
            musicVolume: event.target.value
        }));

        UpdateMusicVolume(utilState);
    }

    const setFxVolume = (event) => {
        setUtilState(oldState => ({
            ...oldState,
            fxVolume: event.target.value
        }));

        UpdateFXVolume(utilState);
    }

    useEffect(() => {
        UpdateFXVolume(utilState);
        UpdateMusicVolume(utilState);
    }, []);


    return (
        <div>
            <h1>Settings</h1>
            <label>
                Music Volume:
                <input type="number" value={utilState.musicVolume} onChange={setMusicVolume} />
            </label>
            <label>
                FX Volume:
                <input type="number" value={utilState.fxVolume} onChange={setFxVolume} />
            </label>
            <button onClick={toGame}>To Game</button>
            <button onClick={toMenu}>To Menu</button>
        </div>
    )
}