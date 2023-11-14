import React, { createContext, useContext } from 'react';

const UtilContext = createContext();

export const UtilContextProvider = ({ children, value }) => (
    <UtilContext.Provider value={value}>{children}</UtilContext.Provider>
);

export const useUtilContext = () => useContext(UtilContext);