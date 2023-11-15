import { ITEM } from "./Item";

const GetWithName = (objectName) => {
    return ITEM[objectName];
};

export default function GenerateOffers(worldState, setWorldState, playerState) {
    const randomIndex = Math.floor(Math.random() * playerState.unlockedItems.length);
    const randomObject = playerState.unlockedItems[randomIndex];
    const realRandomObject = GetWithName(randomObject);
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const offer = [randomNumber, randomNumber * realRandomObject.value, realRandomObject.name];

    setWorldState(oldState => {
        const newOffers = [...oldState.currentOffers, offer];
        return {
            ...oldState,
            currentOffers: newOffers
        };
    });
};

// TODO: add the offer to the player's inventory
export function AcceptOffer(worldState, setWorldState, playerState, setPlayerState, index) {
    const offerCost = worldState.currentOffers[index][1];
    console.log("Offer cost:", offerCost);

    if (playerState.money < offerCost) {
        console.log("Not enough money");
        return false;
    }

    setWorldState(oldState => {
        // Ensure oldState is defined before accessing its properties
        if (!oldState || !oldState.currentOffers) {
            console.error("Invalid state or currentOffers is undefined/null");
            return oldState; // or some default state
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