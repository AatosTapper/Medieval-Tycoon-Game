import React from "react";
import { usePlayerContext } from "../../State/PlayerContextProvider";

export const UpgradeComponent = () => {
    const { playerState, setPlayerState } = usePlayerContext();
    
    return (
<div>
<h1>available points : {playerState.skillPoints}</h1>



</div>

    )
}