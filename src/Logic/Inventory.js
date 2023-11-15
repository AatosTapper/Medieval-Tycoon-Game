import { ITEM, numItems } from "./Item";

const AddItemToInventory = (playerState, setPlayerState, item) => {
    for (const key in ITEM) {
        if (ITEM[key] === item) {
            // TODO: all
        }
    }
}

export default AddItemToInventory;