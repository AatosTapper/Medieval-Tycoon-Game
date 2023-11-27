import React from "react";
import NewDay from "../../Logic/DayCycle";
import { usePlayerContext } from "../../State/PlayerContextProvider";
import { useWorldContext } from "../../State/WorldContextProvider";

export default function DayCycle() {
    const { playerState, setPlayerState } = usePlayerContext();
    const { worldState, setWorldState } = useWorldContext();

    return ( 
        <>
        <button onClick={() => NewDay(worldState, setWorldState, playerState, setPlayerState)}>  Pass a day ... </button>
        </>
    );
}