import React, { useState } from "react";
import { usePlayerContext } from "../../State/PlayerContextProvider";

// Before looking at this, go to the app component and make sure it makes sense.

export default function MainGameComponent() {
    const { playerState, setPlayerState } = usePlayerContext();  // with this line of code, this component can access the global player state

    return (
        <>
        <h1>This holds every component in the game page</h1>
        <a>{playerState.level}</a> {/* This component can now access the player level! */}
        </>
    );
}