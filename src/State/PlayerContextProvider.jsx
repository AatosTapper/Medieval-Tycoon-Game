import React, { createContext, useContext } from 'react';

const PlayerContext = createContext();

export const PlayerContextProvider = ({ children, value }) => (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
);

export const usePlayerContext = () => useContext(PlayerContext);

// Don't look at this file too much because it is just a setup for
// providing the game state as a react context for all child components.

// Game state is all of the data that the game uses and wants to show
// in the ui or save between sessions.

// Basically all components need to access the global game state in some way,
// so we share it with context providers, like this one, in the top
// of the component hierarchy. (app component basically)

// I will write an example later