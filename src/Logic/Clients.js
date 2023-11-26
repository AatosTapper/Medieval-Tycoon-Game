export const GenerateClient = (worldState, setWorldState) => {
    const randomTime = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
    const randomIndex = Math.floor(Math.random() * worldState.possibleNames.length);
    const preferencesIndex = Math.floor(Math.random() * worldState.possiblePreferences.length);
    const wealth = Math.floor(Math.random() * 9);
    const randomName = worldState.possibleNames[randomIndex]
    
    const randomPreference = worldState.possiblePreferences[preferencesIndex]

    const nouveauClient = [randomName, wealth, randomPreference, randomTime];
  
    
    const newList = [...worldState.currentCustomers];
  
    
    newList.push(nouveauClient);
  
    
    setWorldState((prevState) => ({
      ...prevState,
      currentCustomers: newList,
    }));
  };

  export const clearCurrentCustomers = (setWorldState) => {
   
    setWorldState((prevState) => ({
      ...prevState,
      currentCustomers: [],
    }));
  };