import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainGameComponent from './Components/Game/MainGameComponent';
import MainMenuComponent from './Components/Menu/MainMenuComponent';
import { PlayerContextProvider } from './State/PlayerContextProvider';
import { getInitialPlayerState, getInitialUtilState, getInitialWorldState } from './State/InitialStates'; // Look inside this file
import { WorldContextProvider } from './State/WorldContextProvider';
import { UtilContextProvider } from './State/UtilContextProvider';

// This file is for setting up stuff, so when you start working on the game,
// go to the MainGameComponent. 

function App() {
    const [playerState, setPlayerState] = useState(getInitialPlayerState()); // this is the variable that holds player state
    const [worldState, setWorldState] = useState(getInitialWorldState());
    const [utilState, setUtilState] = useState(getInitialUtilState());

    return (
        <>
        {/* These components provide the different game states to the other components to access */}
        <UtilContextProvider value={{ utilState, setUtilState }}>
        <WorldContextProvider value={{ worldState, setWorldState }}>
        <PlayerContextProvider value={{ playerState, setPlayerState }}>
            <Router>
                <Routes>
                    <Route path="/" exact element={<MainMenuComponent />} />
                    <Route path="/game" element={<MainGameComponent />} /> {/* So this component and all components inside it can access the state variables */}
                </Routes>
            </Router>
        </PlayerContextProvider>
        </WorldContextProvider>
        </UtilContextProvider>
        </>
    );
}

export default App;
