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
    let numItems = null;

    for (const key in ITEM) {
        if (itemName === ITEM[key].name) {
            numItems = playerState.inventory[ITEM[key].id];
            break;
        }
    }

    if (numItems === null) {
        console.log("Tried to get an item that doesn't exist from inventory.");
        return false;
    }

    console.log(numItems)
    console.log(amount)
    
    if (amount > numItems || amount < 1) {
        console.log("Not enough items in inventory.");
        return false;
    }
    else {
        AddItemToInventory(playerState, setPlayerState, itemName, -amount);
        return true;
    }
};