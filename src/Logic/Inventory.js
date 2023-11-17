import { ITEM, numItems } from "./Item";

const AddItemToInventory = (playerState, setPlayerState, itemName, amount) => {
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

const TakeItemFromInventory = (playerState, setPlayerState, itemName, amount) => {
    let id = null;
    for (const key in ITEM) {
        if (itemName === ITEM[key].name) {
            id = newInventory[ITEM[key].id];
            break;
        }
    }
    if (id === null) {
        console.log("Tried to get item that doens't exist from inventory.")
        return;
    }
    const numItems = playerState.inventory[id];
    amount = amount >= numItems ? numItems : amount;
    AddItemToInventory(playerState, setPlayerState, itemName, -amount);
}

export default { AddItemToInventory, TakeItemFromInventory };