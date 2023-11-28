import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainGameComponent from './Components/Game/MainGameComponent';
import MainMenuComponent from './Components/Menu/MainMenuComponent';
import { PlayerContextProvider } from './State/PlayerContextProvider';
import { WorldContextProvider } from './State/WorldContextProvider';
import { UtilContextProvider } from './State/UtilContextProvider';
import { MainSettingsComponent } from './Components/Settings/MainSettingsComponent';
import { getInitialPlayerState, getInitialUtilState, getInitialWorldState } from './State/InitialStates';

function App() {
    const [playerState, setPlayerState] = useState(getInitialPlayerState());
    const [worldState, setWorldState] = useState(getInitialWorldState());
    const [utilState, setUtilState] = useState(getInitialUtilState());

    return (
        <>
        <UtilContextProvider value={{ utilState, setUtilState }}>
        <WorldContextProvider value={{ worldState, setWorldState }}>
        <PlayerContextProvider value={{ playerState, setPlayerState }}>
            <Router>
                <Routes>
                    <Route path="/" exact element={<MainMenuComponent />} />
                    <Route path="/game" element={<MainGameComponent />} />
                    <Route path="/settings" element={<MainSettingsComponent />} />
                </Routes>
            </Router>
        </PlayerContextProvider>
        </WorldContextProvider>
        </UtilContextProvider>
        </>
    );
}

export default App;