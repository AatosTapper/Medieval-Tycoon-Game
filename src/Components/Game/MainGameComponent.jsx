import React, { useState } from "react";
import { usePlayerContext } from "../../State/PlayerContextProvider";
import { useWorldContext } from "../../State/WorldContextProvider";
import { useUtilContext } from "../../State/UtilContextProvider";
import { useNavigate } from "react-router-dom";
import NewDay from "../../Logic/DayCycle";
import "../../CSS/MainMenu.css";

// Before looking at this, go to the app component and make sure it makes sense.

export default function MainGameComponent() {
    const { playerState, setPlayerState } = usePlayerContext();  // with this line of code, this component can access the global player state
    const { worldState, setWorldState } = useWorldContext();
    const { utilState, setUtilState } = useUtilContext();
    const navigate = useNavigate();

    const backToMainMenu = () => {
        navigate("/");
    }

    return (
        <>
        <div className="font-medieval">
        <h1>Game page</h1>
        <h1> Bonjour </h1>
        <button onClick={backToMainMenu}>Return To Main Menu</button>
        <a>{worldState.day}</a> {/* This component can now access the player level! */}
        <button onClick={() => NewDay(setWorldState)}>Change day</button>
        </div>
        </>
    );
}