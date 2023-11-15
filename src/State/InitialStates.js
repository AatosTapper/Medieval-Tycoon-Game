import { numItems } from "../Logic/Item"

// This file has all of the starting values for each state

// If you want to add a variable (for example storageSize) to the player, do it here

const initialPlayerState = {
    name: "Bruh",
    xp: 0,
    level: 1,
    money: 100000,
    inventory: [],
    unlockedItems: ["apple","wood","rock"]
}

const initialWorldState = {
    day: 1,
    weekday: "Monday",
    week: 0,
    currentOffers: [[2, 30, "apple"]]
}

const initialUtilState = {
    currentUiFocus: "Offers"
}

export function getInitialPlayerState() {
    initialPlayerState.inventory = new Array(numItems).fill(0); // initialize the inventory to all zeros
    return initialPlayerState;
}

export function getInitialWorldState() {
    return initialWorldState;
}

export function getInitialUtilState() {
    return initialUtilState;
}