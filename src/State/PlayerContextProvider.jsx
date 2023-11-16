import React, { createContext, useContext } from 'react';

const PlayerContext = createContext();

export const PlayerContextProvider = ({ children, value }) => (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
);

export const usePlayerContext = () => useContext(PlayerContext);