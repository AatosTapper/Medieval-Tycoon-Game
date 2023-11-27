
export const ITEM = {
    apple: {
        name: "apple",
        value: 20,
        id: 0,
        image: "src/images/apple.png"
    },
    wood: {
        name: "wood",
        value: 50,
        id: 1,
        image: "src/images/log.png"
    },
    rock: {
        name: "rock",
        value: 100,
        id: 2,
        image: "src/images/rock.png"
    }
}

// IMPORTANT: Put the item value to the list in world state
// IMPORTANT: Increment this when you add new items, it is needed for inventory and stuff
export const numItems = 3; 

export function GetItemById(id) {
    for (const key in ITEM) {
        if (id === ITEM[key].id) {
            return ITEM[key];
        }
    }
}

export const SetItemValues = (worldState) => {
    for (let i = 0; i < numItems; i++) {
        let item = GetItemById(i);
        item.value = worldState.itemValues[i];
    }
}