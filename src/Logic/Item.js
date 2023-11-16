
// IMPORTANT: Increment this when you add new items, it is needed for inventory and stuff
export const numItems = 3; 

export const ITEM = {
    apple: {
        name: "apple",
        value: 20,
        id: 0,
        image: ""
    },
    wood: {
        name: "wood",
        value: 50,
        id: 1,
        image: ""
    },
    rock: {
        name: "rock",
        value: 100,
        id: 2,
        image: ""
    }
}

export function GetItemById(id) {
    for (const key in ITEM) {
        if (id === ITEM[key].id) {
            return ITEM[key];
        }
    }
}