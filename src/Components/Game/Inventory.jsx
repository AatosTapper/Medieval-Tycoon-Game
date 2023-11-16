import React, { useEffect, useState } from "react";
import { usePlayerContext } from "../../State/PlayerContextProvider";
import { ITEM, GetItemById } from "../../Logic/Item";
import "../../CSS/Inventory.css";

const InventoryItem = ({ item, amount }) => {
    console.log(JSON.stringify(item, null, 4));
    return (
        <div className="Inventory-Item">
            <img className="Inventory-Item-Image" src={item.image}/>
            <p className="Inventory-Item-Amount">{amount}</p>
            <p className="Inventory-Item-Name">{item.name}</p>
            <p className="Inventory-Item-Value">{item.value}€</p>
        </div>
    );
}

const Inventory = () => {
    const { playerState, setPlayerState } = usePlayerContext(); 
    const [items, setItems] = useState([]);

    useEffect(() => {
        let newItems = [];
        for (let i = 0; i < playerState.inventory.length; i++) {
            newItems.push(GetItemById(i));
        }
        setItems(() => [...newItems]);
    }, [playerState.inventory])

    return (
        <div className="Inventory-Full">
            <h1 className="Inventory-Header">Inventory</h1>
            <ul className="Inventory-Item-Area">
                {items.map((item, index) => {
                    const amount = playerState.inventory[index];
                    return (
                        amount == 0 
                        ? <></>
                        : <li key={index}><InventoryItem item={item} amount={amount} /></li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Inventory;