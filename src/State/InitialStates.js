import { numItems } from "../Logic/Item"

// This file has all of the starting values for each state

// If you want to add a variable (for example storageSize) to the player, do it here

const initialPlayerState = {
    name: "Bruh",
    xp: 0,
    level: 1,
    money: 1000,
    inventory: [],
    unlockedItems: ["apple","wood","rock"]
}

const initialWorldState = {
    day: 1,
    weekday: "Monday",
    week: 0,
    currentOffers: [[2, 30, "apple", 5]],
    newspaper: {
        title :'The (shop name) charms the city',
        text: `A buzz of excitement swept through the city today as a mysterious shop, "The (name of the shop)" unveiled its doors. This magical emporium promises wonders for all who enter.

         welcomes dreamers, adventurers, and seekers of the extraordinary."
        
         The shop, shrouded in an air of mystery, invites everyone to discover the magic within.
        
        For those craving a touch of the extraordinary, "The (shop name)" is now a beacon of enchantment in our fantastical city.
        
        Stay tuned for more enchanting tales from the heart of our mystical realm!`
    }
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