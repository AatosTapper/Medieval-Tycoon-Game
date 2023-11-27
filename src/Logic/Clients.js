export const GenerateClient = (worldState,setWorldState) => {

    //For the names I check some medieval english names but You can add some more if you want ! 
    const possibleNames = [ "Alfred", "Edith", "Eadric", "Aelfric", "Aethelred", 
    "Cenric", "Wulfric", "Ealdgyth", "Godric", "Aldred", 
    "Leofric", "Wulfhild", "Ethelbert", "Cyneburg", "Cuthbert", 
    "Aeliana", "Leofwine", "Aethelflaed", "Egbert", 
    "Aldwyn", "Ealhswith", "Aldhelm", "Wynflaed", "Ethelburg", 
    "Leofsige", "Wynsige", "Ealdred", "Eadgyth", "Leofwynn", 
    "Wynstan", "Aelfweard", "Eadburh", "Ceolmund", "Ailwin", 
    "Eadgifu", "Wynstan", "Aethelgifu", "Leofric", "Eadwyn", 
    "Aldgyth", "Wynburga", "Aethelwine", "Ealdgyth", "Leofgifu", 
    "Wynflaed", "Aelwig", "Eadred", "Leofstan", "Wynna", ]

    const randomTime = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
    const randomIndex = Math.floor(Math.random() * possibleNames.length);
    const preferencesIndex = Math.floor(Math.random() * worldState.possiblePreferences.length);
    const wealth = Math.floor(Math.random() * 9);
    const randomName = possibleNames[randomIndex]
    console.log(randomTime);
    
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

  export const UpdateCustomers = (worldState, setWorldState) => 
  {
    let customers = worldState.currentCustomers;
    for (let i = 0; i < customers.length; i++)
    {
      if (customers[i][3] <= 0)
      {
        customers.splice(i, 1); 
        i--;
        console.log("deleted");
        continue;
        
      }
      customers[i][3] -= 1;

      console.log(customers[i][3]) 
  
    }
    setWorldState(oldState => ( {
        ...oldState,
        currentCustomers: customers
    }))
  }