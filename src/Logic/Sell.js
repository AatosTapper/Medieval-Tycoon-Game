import { TakeItemFromInventory } from "./Inventory";
import { GetItemById } from "./Item";

export const Sell = (worldState, setWorldState, playerState, setPlayerState, item, price, amount) => {
 
 
  const succes = TakeItemFromInventory(playerState, setPlayerState, GetItemById(item).name, amount)
  console.log(succes)
  if (succes){



  const newElement = [item, price, amount];

 
  setWorldState(prevState => {
    return {
      ...prevState,
      sellingItems: [...prevState.sellingItems, newElement]
    };
  });
}
else
{
console.log("not enough")
}




};