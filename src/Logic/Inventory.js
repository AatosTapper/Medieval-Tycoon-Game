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

export default AddItemToInventory;