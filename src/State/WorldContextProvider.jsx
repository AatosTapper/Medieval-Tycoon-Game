import React, { createContext, useContext } from 'react';

const WorldContext = createContext();

export const WorldContextProvider = ({ children, value }) => (
    <WorldContext.Provider value={value}>{children}</WorldContext.Provider>
);

export const useWorldContext = () => useContext(WorldContext);