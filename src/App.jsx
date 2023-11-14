import React, { useState } from 'react'
import MainGameComponent from './Components/Game/MainGameComponent';
import MainMenuComponent from './Components/Menu/MainMenuComponent';
import { PlayerContextProvider } from './State/PlayerContextProvider';
import { initialPlayerState } from './State/InitialStates'; // Look inside this file

// This file is for setting up stuff, so when you start working on the game,
// go to the MainGameComponent. 

function App() {
    const [playerState, setPlayerState] = useState(initialPlayerState); // this is the variable that holds player state

    return (
        <>
        {/* This is a component that provides the player state variable to all components inside it */}
        <PlayerContextProvider value={{ playerState, setPlayerState }}>
            <MainGameComponent /> {/* So this component and all components inside it can access the state variable */}
        </PlayerContextProvider>
        </>
    );
}

export default App;
