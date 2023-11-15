import React, { useState } from "react";
import { ITEM } from "../../Logic/Item";
import { usePlayerContext } from "../../State/PlayerContextProvider";

const OfferComponent = () => {
  const { playerState, setPlayerState } = usePlayerContext()
  const [offers, setOffers] = useState([[1,20, "apple"], [2, 100, "wood"]]);
  
  const [realRandomObject, setRealRandomObject] = useState(null);

  const GetWithName = (objectName) => {
    return ITEM[objectName];
  };

  const OfferGenerator = () => {
    const randomIndex = Math.floor(Math.random() * playerState.unlockedItems.length);
    const randomObject = playerState.unlockedItems[randomIndex];
    const realRandomObject = GetWithName(randomObject);

    
    setRealRandomObject(realRandomObject);

   
    setPlayerState({ ...playerState, realRandomObject });

    const randomNumber = Math.floor(Math.random() * 10) + 1;

    setOffers(prevState => [...prevState, [randomNumber, randomNumber * realRandomObject.value, realRandomObject.name]]);
  };

  const handleAccept = (index) => {
    const newOffers = [...offers];
    newOffers.splice(index, 1);
    setOffers(newOffers);
  };

  return (
    <div>
      <button onClick={() => OfferGenerator()}>Create an offer</button>
      
      {realRandomObject && <p>{realRandomObject.value}</p>}
      <OfferDisplay offers={offers} handleAccept={handleAccept} />
    </div>
  );
};

const OfferDisplay = ({ offers, handleAccept }) => {
  return (
    <ul>
      {offers.map((offer, index) => (
        <li key={index}>
          {`${offer[0]} `} {`${offer[2]} `} for {`${offer[1]} `}
          <button onClick={() => handleAccept(index)}>Accept</button>
        </li>
      ))}
    </ul>
  );
};

export default OfferComponent;