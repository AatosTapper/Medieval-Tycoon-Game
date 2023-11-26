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
    notification : ["bonjour","feur"],

    sellingItems : [[0,20,3],[1,50,5],[1,50,5]],

    currentCustomers : [["George", 7,"mine",10],["Donald",3,"farm",15]],

    //For the names I check some medieval english names but You can add some more if you want ! 
    possibleNames : [ "Alfred", "Edith", "Eadric", "Aelfric", "Aethelred", 
    "Cenric", "Wulfric", "Ealdgyth", "Godric", "Aldred", 
    "Leofric", "Wulfhild", "Ethelbert", "Cyneburg", "Cuthbert", 
    "Aeliana", "Leofwine", "Aethelflaed", "Egbert", 
    "Aldwyn", "Ealhswith", "Aldhelm", "Wynflaed", "Ethelburg", 
    "Leofsige", "Wynsige", "Ealdred", "Eadgyth", "Leofwynn", 
    "Wynstan", "Aelfweard", "Eadburh", "Ceolmund", "Ailwin", 
    "Eadgifu", "Wynstan", "Aethelgifu", "Leofric", "Eadwyn", 
    "Aldgyth", "Wynburga", "Aethelwine", "Ealdgyth", "Leofgifu", 
    "Wynflaed", "Aelwig", "Eadred", "Leofstan", "Wynna", ],

    possiblePreferences : ["farm","mine","wood","magic","crafting"],
    
    company: {
        mine: {
            id: 0,
            value: 0.0,
            derivative: 0.0
        },
        farm: {
            id: 1,
            value: 0.0,
            derivative: 0.0
        },
        wood: {
            id: 2,
            value: 0.0,
            derivative: 0.0
        },
        magic: {
            id: 3,
            value: 0.0,
            derivative: 0.0
        },
        crafting: {
            id: 4,
            value: 0.0,
            derivative: 0.0
        },
        globalValue: 0.0 // average of all companies
    }
}

const initialUtilState = {
    currentUiFocus: "offers",
    musicVolume: 1.0,
    fxVolume: 1.0,
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