import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../../CSS/MainMenu.css";
import "../../CSS/index.css";
import { OpenStorage } from "../../Save/db";
import { usePlayerContext } from "../../State/PlayerContextProvider";
import { useWorldContext } from "../../State/WorldContextProvider";
import { useUtilContext } from "../../State/UtilContextProvider";

export default function MainMenuComponent() {
    const { playerState, setPlayerState } = usePlayerContext();
    const { worldState, setWorldState } = useWorldContext();
    const { utilState, setUtilState } = useUtilContext();
    const [ gameButtonTxt, setGameButtonTxt ] = useState("Continue Game");

    const navigate = useNavigate();

    const goToGame = () => {
        navigate("/game"); 
    }

    const goToSettings = () => {
        navigate("/settings"); 
    }

    useEffect(() => {
        OpenStorage(setPlayerState, setWorldState, setUtilState);
    }, []);
    useEffect(() => {
        if (utilState.isNewSave === true) {
            setGameButtonTxt("Start Game");
        }
        else {
            setGameButtonTxt("Continue Game");
        }
    }, [utilState]);

    return (
        <div className="Font-Medieval Main-Menu">
            <h1 className="Main-Menu-Title">Game Title Here</h1>
            <button onClick={goToGame} className="Main-Menu-Button Font-Medieval">{gameButtonTxt}</button>
            <button onClick={goToSettings} className="Main-Menu-Button Font-Medieval">Settings</button>
        </div>
    );
}