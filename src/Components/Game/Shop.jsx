import React, { useState } from "react";
import { usePlayerContext } from "../../State/PlayerContextProvider";
import { useWorldContext } from "../../State/WorldContextProvider";
import { GetItemById } from "../../Logic/Item";
import { Sell } from "../../Logic/Sell";
import { TakeItemFromInventory } from "../../Logic/Inventory";
import { GenerateClient, UpdateCustomers } from "../../Logic/Clients";
import { clearCurrentCustomers } from "../../Logic/Clients";
import { useEffect } from "react";
import { Buy } from "../../Logic/Buying";


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

  
    // Shop GAMELOOP
    const updateIntervalMS = 500;
    useEffect(() => {
        if ( worldState.openShop === false ){ return; }

        const interval = setInterval( async () => {
            await UpdateCustomers(worldState,setWorldState)
            Buy(worldState,setWorldState,playerState, setPlayerState)
        }, updateIntervalMS);

        return () => clearInterval(interval);
    },[worldState]);

    useEffect(() => {
        for (let i = 0 ; i < worldState.sellingItems.length; i++) {
            if (worldState.sellingItems[i][2] === 0) {
                const newList = [...worldState.sellingItems];
                newList.splice([i], 1);
                setWorldState({ ...worldState, sellingItems: newList });
            }
        }
    }, [worldState]);

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
            <button onClick={() => GenerateClient(worldState)}> add client </button>
            <button onClick={()=> clearCurrentCustomers()}> clear clients </button>
        </div>
    );
};

export default Shop;