import React from "react";
import { usePlayerContext } from "../../State/PlayerContextProvider";
import { useWorldContext } from "../../State/WorldContextProvider";
import { GetItemById } from "../../Logic/Item";
import { Sell } from "../../Logic/Sell";
import { TakeItemFromInventory } from "../../Logic/Inventory";

const Shop = () => {
    const { playerState, setPlayerState } = usePlayerContext();  
    const { worldState, setWorldState } = useWorldContext();

    return (
        <div>
            <h1>Shop</h1>
            <h1> Items for sale : </h1>
            <button onClick={() => Sell(worldState, setWorldState, playerState, setPlayerState, 2, 79, 2)}>Sell</button>
            <ul>
          {worldState.sellingItems.map((item, index) => (
            <li key={index}>
              {"name : " + GetItemById(item[0]).name + "  "} 
              {"price : " + item[1] + "  "} 
              { "amount : " + item[2] + " "} 
            </li>
          ))}
        </ul>
        </div>
    );
}

export default Shop;