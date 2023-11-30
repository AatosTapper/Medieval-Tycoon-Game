import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUtilContext } from "../../State/UtilContextProvider";
import { UpdateFXVolume } from "../../Audio/playSound";
import { UpdateMusicVolume } from "../../Audio/playMusic";
import { DeleteStorage, OpenStorage, SaveToStorage } from "../../Save/db";
import { usePlayerContext } from "../../State/PlayerContextProvider";
import { useWorldContext } from "../../State/WorldContextProvider";
import { Slider } from "../Generic/Slider";
import "../../CSS/Settings.css";

export const MainSettingsComponent = ({lastPage}) => {
    const { playerState, setPlayerState } = usePlayerContext();
    const { worldState, setWorldState } = useWorldContext();
    const { utilState, setUtilState } = useUtilContext();
    const navigate = useNavigate();

    const toMenu = () => {
        navigate("/"); 
    }

    const toGame = () => {
        navigate("/game"); 
    }

    const deleteSave = () => {
        navigate("/");
        DeleteStorage();
        OpenStorage(setPlayerState, setWorldState, setUtilState);
    }

    const setMusicVolume = (event) => {
        setUtilState(oldState => ({
            ...oldState,
            musicVolume: event.target.value / 100
        }));

        UpdateMusicVolume(utilState);
    }

    const setFxVolume = (event) => {
        setUtilState(oldState => ({
            ...oldState,
            fxVolume: event.target.value / 100
        }));

        UpdateFXVolume(utilState);
    }

    useEffect(() => {
        UpdateFXVolume(utilState);
        UpdateMusicVolume(utilState);
    }, []);

    return (
        <div className="Settings-Page Font-Medieval">
            <h1 className="Settings-Header">Settings</h1>
            <form className="Volume-Form" name="MusicVolume">
                <label className="Volume-Header" htmlFor="MusicVolume">Music Volume {Math.round(utilState.musicVolume * 100)}%</label>
                {/*<input id="MusicVolume" type="number" value={utilState.musicVolume} onChange={setMusicVolume} />*/}
                <Slider onChange={setMusicVolume} min={0.0} max={100.0} val={utilState.musicVolume * 100} className="Volume-Slider" id="MusicVolume" />
            </form>
            <form className="Volume-Form" name="FxVolume">
                <label className="Volume-Header" htmlFor="FxVolume">FX Volume {Math.round(utilState.fxVolume * 100)}%</label>
                {/*<input id="FxVolume" type="number" value={utilState.fxVolume} onChange={setFxVolume} />*/}
                <Slider onChange={setFxVolume} min={0.0} max={100.0} val={utilState.fxVolume * 100} className="Volume-Slider" id="FxVolume" />
            </form>
            <button onClick={toGame}>To Game</button>
            <button onClick={toMenu}>To Menu</button>
            <button onClick={() => SaveToStorage(playerState, worldState, utilState, setUtilState)}>Save Game</button>
            <button onClick={deleteSave}>Delete Save</button>
        </div>
    )
}