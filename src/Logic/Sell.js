import { TakeItemFromInventory } from "./Inventory";
import { GetItemById } from "./Item";

export const Sell = (worldState, setWorldState, playerState, setPlayerState, item, price, amount) => {
 
 
  TakeItemFromInventory(playerState, setPlayerState, GetItemById(item).name, amount)
  console.log(GetItemById(item).name)



  const newElement = [item, price, amount];

 
  setWorldState(prevState => {
    return {
      ...prevState,
      sellingItems: [...prevState.sellingItems, newElement]
    };
  });
};