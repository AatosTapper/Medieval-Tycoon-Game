import { SoundChangeDay, SoundLevelUp } from "../Audio/playSound";
import { SaveToStorage } from "../Save/db";
import { UpdateEconomy } from "./Economy";
import { UpdateItemValues } from "./Item";
import UpdateXpAndLevel from "./LevelUp";
import { GenerateOffers, UpdateOffers } from "./NewOffers";


const CalcWeek = (days) => Math.floor((days - 1) / 7);

const GetWeekday = (day) => {
    switch (day % 7) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 0:
            return "Sunday";
        default:
            return null;
    }
}

const IncrementDay = (setWorldState) => {
    setWorldState(oldWorld => ({
        ...oldWorld,
        day: oldWorld.day + 1,
        week: CalcWeek(oldWorld.day + 1),
        weekday: GetWeekday(oldWorld.day + 1)
    }));
}

const NewDay = async (worldState, setWorldState, playerState, setPlayerState, utilState, setUtilState) => {
    //SoundChangeDay();
    SoundLevelUp();
    IncrementDay(setWorldState);
    UpdateEconomy(setWorldState);
    UpdateXpAndLevel(worldState, setWorldState, playerState, setPlayerState);
    UpdateOffers(setWorldState);
    GenerateOffers(worldState, setWorldState, playerState);
    UpdateItemValues(worldState, setWorldState);
    SaveToStorage(playerState, worldState, utilState, setUtilState);
}

export default NewDay;