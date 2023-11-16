import { numItems } from "../Logic/Item"

// This file has all of the starting values for each state

const initialPlayerState = {
    name: "JoeMama",
    xp: 0,
    level: 1,
    money: 100000,
    inventory: [],
    unlockedItems: ["apple","wood","rock"],
    skillPoints : 2,

    storage : 0,
    offersDay : 0,

    rentabilty : 0,
    maintenance : 0,

    customersService : 0
}

const initialWorldState = {
    day: 1,
    weekday: "Monday",
    week: 0,
    currentOffers: [[2, 30, "apple", 5]],
    newspaper: {
        title: 'The (shop name) charms the city',
        text: `A buzz of excitement swept through the city today as a mysterious shop, "The (name of the shop)" unveiled its doors. This magical emporium promises wonders for all who enter.
                 Welcomes dreamers, adventurers, and seekers of the extraordinary."
                 The shop, shrouded in an air of mystery, invites everyone to discover the magic within.
                 For those craving a touch of the extraordinary, "The (shop name)" is now a beacon of enchantment in our fantastical city.
                Stay tuned for more enchanting tales from the heart of our mystical realm!`
    },
    notification : ["bonjour","feur"]
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