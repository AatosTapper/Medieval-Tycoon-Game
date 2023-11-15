import React, { useState } from "react";
import { ITEM } from "../../Logic/Item";
import { usePlayerContext } from "../../State/PlayerContextProvider";

const OfferGenerator = (offers,setOffers) => {
    const { playerState, setPlayerState } = usePlayerContext()

    const randomIndex = Math.floor(Math.random() * playerState.unlockedItems.length);
    const randomObject = playerState.unlockedItems[randomIndex];
    const realRandomObject = GetWithName(randomObject);

    
    setRealRandomObject(realRandomObject);

   
    setPlayerState({ ...playerState, realRandomObject });

    const randomNumber = Math.floor(Math.random() * 10) + 1;

    setOffers(prevState => [...prevState, [randomNumber, randomNumber * realRandomObject.value, realRandomObject.name]]);
  };

  

  export default OfferGenerator;
