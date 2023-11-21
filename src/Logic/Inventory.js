import { ITEM, numItems } from "./Item";

export const AddItemToInventory = (playerState, setPlayerState, itemName, amount) => {
    let newInventory = [...playerState.inventory];
    for (const key in ITEM) {
        if (itemName === ITEM[key].name) {
            newInventory[ITEM[key].id] += amount;
        }
    }

    setPlayerState(oldState => ({
        ...oldState,
        inventory: [...newInventory]
    }));
}

export const TakeItemFromInventory = (playerState, setPlayerState, itemName, amount) => {
    let id = null;

    for (const key in ITEM) {
        if (itemName === ITEM[key].name) {
            id = playerState.inventory[ITEM[key].id];
            break;
        }
    }

    if (id === null) {
        console.log("Tried to get an item that doesn't exist from inventory.");
        return false;
    }

    const numItems = playerState.inventory[id];
    console.log(id)
    console.log(amount)
    
    if (amount > id && amount < 1) {
        console.log("Not enough items in inventory.");
        return false;
    }
    else {

    AddItemToInventory(playerState, setPlayerState, itemName, -amount);
    return true;
}
};