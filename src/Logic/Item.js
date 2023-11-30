import { DEVIATION } from "./Economy";

// Each item has a max of 2.0 to distribute in valueEffectMatrix
// softMin is a soft limit for the price, it wont go much under it (a little bit is allowed)
export const ITEM = {
    apple: {
        name: "apple",
        value: 20,
        softMin: 5,
        id: 0,
        image: "src/images/apple.png",
        valueEffectMatrix: [0.0, 1.0, 0.4, 0.2, 0.0]
    },
    wood: {
        name: "wood",
        value: 50,
        softMin: 10,
        id: 1,
        image: "src/images/log.png",
        valueEffectMatrix: [0.1, 0.4, 1.0, 0.1, 0.1]
    },
    rock: {
        name: "rock",
        value: 100,
        softMin: 30,
        id: 2,
        image: "src/images/rock.png",
        valueEffectMatrix: [1.0, 0.0, 0.2, 0.4, 0.2]
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

export const UpdateItemValues = (worldState, setWorldState) => {
    const newValues = calcItemValues(worldState);

    for (let i = 0; i < numItems; i++) {
        let item = GetItemById(i);
        item.value = newValues[i];
    }
    console.log("New Item Values", newValues);
    setWorldState(oldState => ({
        ...oldState,
        itemValues: newValues
    }));
}

const calcItemValues = (worldState) => {
    let newValues = worldState.itemValues;
    const dampMultiplier = 0.8;

    for (const name in worldState.company) {
        if (name === "globalValue")
            continue;
        
        const companyValue = worldState.company[name].value;
        const companyId = worldState.company[name].id;
        for (const item in ITEM) {
            const bias = ITEM[item].softMin;
            let newValue = newValues[ITEM[item].id] + (companyValue / DEVIATION) * ITEM[item].valueEffectMatrix[companyId] * dampMultiplier;
            if (newValue <= bias) {
                newValue = (newValue / 10) + bias - (bias / 10); // clamp the value to a leaky ReLU type function
            }
            newValues[ITEM[item].id] = Math.round(newValue * 10) / 10;
        }
    }

    return newValues;
}