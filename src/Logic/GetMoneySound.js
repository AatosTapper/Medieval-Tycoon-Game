import { SoundGetMoneyHig, SoundGetMoneyLow, SoundGetMoneyMed } from "../Audio/playSound";

const MED_FLOOR = 500;
const HIG_FLOOR = 2000;

export const CalcMoneySound = (amount) => {
    console.log("Amount", amount);
    if (amount < MED_FLOOR) {
        SoundGetMoneyLow();
    }
    else if (amount < HIG_FLOOR) {
        SoundGetMoneyMed();
    }
    else {
        SoundGetMoneyHig();
    }
}