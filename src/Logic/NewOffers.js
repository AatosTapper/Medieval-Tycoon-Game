import { ITEM } from "./Item";
import AddItemToInventory from "./Inventory"

const GetWithName = (objectName) => {
    return ITEM[objectName];
};

const CreateOffer = (worldState, setWorldState, playerState) => {
    const randomIndex = Math.floor(Math.random() * playerState.unlockedItems.length);
    const randomObject = playerState.unlockedItems[randomIndex];
    const realRandomObject = GetWithName(randomObject);
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const randomTimeLimit = Math.floor(Math.random() * 3);
    const offer = [randomNumber, randomNumber * realRandomObject.value, realRandomObject.name, randomTimeLimit];

    setWorldState(oldState => {
        const newOffers = [...oldState.currentOffers, offer];
        return {
            ...oldState,
            currentOffers: newOffers
        };
    });
}

export function GenerateOffers(worldState, setWorldState, playerState) {
    const offerAmount = Math.floor(Math.random() * 3) + 3;
    for (let i = 0; i < offerAmount; i++) {
        CreateOffer(worldState, setWorldState, playerState);
    }
};

// TODO: add the offer to the player's inventory
export function AcceptOffer(worldState, setWorldState, playerState, setPlayerState, index) {
    const offerCost = worldState.currentOffers[index][1];
    console.log("Offer cost:", offerCost);

    if (playerState.money < offerCost) {
        console.log("Not enough money");
        return false;
    }

    AddItemToInventory(playerState, setPlayerState, worldState.currentOffers[index][2], worldState.currentOffers[index][0]);

    setWorldState(oldState => {
        // Ensure oldState is defined before accessing its properties
        if (!oldState || !oldState.currentOffers) {
            console.error("Invalid state or currentOffers is undefined/null");
            return oldState;
        }

        const newOffers = [...oldState.currentOffers];
        newOffers.splice(index, 1);

        return {
            ...oldState,
            currentOffers: newOffers
        };
    });

    setPlayerState(oldState => ({
        ...oldState,
        money: oldState.money - offerCost
    }));

    return true;
}

export function UpdateOffers(worldState, setWorldState) {
    setWorldState(oldState => {
        if (!oldState || !oldState.currentOffers) {
            console.error("Invalid state or currentOffers is undefined/null");
            return oldState;
        }

        const newOffers = oldState.currentOffers.map(offer => {
            const updatedOffer = [...offer];
            updatedOffer[3] -= 1;
            return updatedOffer;
        }).filter(offer => offer[3] > 0);

        return {
            ...oldState,
            currentOffers: newOffers
        };
    });
}
