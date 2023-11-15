import React from "react";
import "../../CSS/index.css";
import "../../CSS/ProfileInfo.css";
import { usePlayerContext } from "../../State/PlayerContextProvider";

export default function ProfileInfo() {
    const { playerState, setPlayerState } = usePlayerContext();

    return (
        <div className="Generic-Ui-Component Profile-Info-Box">
            <h1 id="Profile-Info-Name">{playerState.name}</h1>
            <h1 id="Profile-Info-Level">Level {playerState.level}</h1>
            <h1 id="Profile-Info-XP">Experience {playerState.xp}</h1>
            <h1 id="Profile-Info-Money">Experience {playerState.money}</h1>
        </div>
    );
}