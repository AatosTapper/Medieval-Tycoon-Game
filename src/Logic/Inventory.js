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

    if (amount > numItems) {
        console.log("Not enough items in inventory.");
        return false;
    }

    AddItemToInventory(playerState, setPlayerState, itemName, -amount);
    return true;
};