import { ITEM } from "./Item";
import { AddItemToInventory } from "./Inventory"
import Transaction from "./Transaction";
import { SoundAcceptOffer } from "../Audio/playSound";
import { RandGauss } from "./RandGauss";

const GetWithName = (objectName) => {
    return ITEM[objectName];
};

const CreateOffer = (worldState, setWorldState, playerState) => {
    const roundingFactor = 10;

    const randomObject = playerState.unlockedItems[Math.floor(Math.random() * playerState.unlockedItems.length)];
    const realObject = GetWithName(randomObject);
    const amount = Math.floor(Math.random() * 10 + 1);
    const timeLimit = Math.floor(Math.random() * 3);
    const priceOffset = RandGauss(1.05, 0.5);
    const price = Math.round(amount * realObject.value * priceOffset * roundingFactor) / roundingFactor;

    const offer = [amount, price, realObject.name, timeLimit];

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

export function AcceptOffer(worldState, setWorldState, playerState, setPlayerState, index) {
    const offerCost = worldState.currentOffers[index][1];
    // The check for money happens earlier in the component

    SoundAcceptOffer();
    Transaction(setPlayerState, -offerCost);
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

    return true;
}

export function UpdateOffers(setWorldState) {
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
