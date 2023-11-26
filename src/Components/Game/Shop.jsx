import React, { useState } from "react";
import { usePlayerContext } from "../../State/PlayerContextProvider";
import { useWorldContext } from "../../State/WorldContextProvider";
import { GetItemById } from "../../Logic/Item";
import { Sell } from "../../Logic/Sell";
import { TakeItemFromInventory } from "../../Logic/Inventory";
import { GenerateClient } from "../../Logic/Clients";
import { clearCurrentCustomers } from "../../Logic/Clients";

const Shop = () => {
  const { playerState, setPlayerState } = usePlayerContext();
  const { worldState, setWorldState } = useWorldContext();

 
  const [item, setItem] = useState(0); 
  const [price, setPrice] = useState(20);
  const [amount, setAmount] = useState(1);

  const handleItemChange = (event) => {
   
    setItem(parseInt(event.target.value, 10) || 0);
  };

  const handlePriceChange = (event) => {
    setPrice(Number(event.target.value) || 0);
  };

  const handleAmountChange = (event) => {
    setAmount(Number(event.target.value) || 0);
  };

  return (
    <div>
      <h1>Shop</h1>
     
      <input type="number" value={item} onChange={handleItemChange} placeholder="Item" />
      <input type="number" value={price} onChange={handlePriceChange} placeholder="Price" />
      <input type="number" value={amount} onChange={handleAmountChange} placeholder="Amount" />

      <h1>Items for sale:</h1>
      
      <button onClick={() => Sell(worldState, setWorldState, playerState, setPlayerState, item, price, amount)}>
        Sell
      </button>
      <ul>
        {worldState.sellingItems.map((item, index) => (
          <li key={index}>
            {"name: " + GetItemById(item[0]).name + "  "}
            {"price: " + item[1] + " "}
            {"amount: " + item[2] + " "}
          </li>
        ))}
      </ul>
      <ul>
      {worldState.currentCustomers.map((item, index) => (
          <li key={index}>
            {"name : " + item[0] + "        "}
            {"     wealth : " + item[1] + "      "}
            {"     preferences : " + item[2]}
          </li>
       
        ))}
      </ul>
      <button onClick={()=> GenerateClient(worldState,setWorldState)}> add client </button>
      <button onClick={()=> clearCurrentCustomers(setWorldState)}> clear clients </button>
    </div>


  );
};

export default Shop;