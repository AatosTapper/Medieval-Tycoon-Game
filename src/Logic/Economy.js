import { RandGauss } from "./RandGauss";

// How much the delta value affects the new derivative
// 2 = delta value is half of the next derivative
// 3 = delta value is one third of the next derivative
const NEW_DER_FRAC = 3;

const CHAOS = 0.25; // Random offset range
const INERTIA = 0.15; // How much derivative momentum is conserved
const INERTIA_RANGE = 0.05; // Random range
const MARKET_INFLUENCE = 0.05;
const MARKET_INFLUENCE_RANGE = 0.1;

const calcOffset = (derivative, globalValue) => {
    const negMult = derivative < 0 ? 1.5 : 1.0; // Value goes down more than up
    const randOffset = RandGauss(0, CHAOS);
    const derivativeMult = RandGauss(INERTIA, INERTIA_RANGE);
    const globalMarketOffset = RandGauss(MARKET_INFLUENCE, MARKET_INFLUENCE_RANGE) * globalValue * 0.1;
    return derivative * negMult * derivativeMult + randOffset + globalMarketOffset;
}

const calcDerivative = (oldDerivative, deltaVal) => {
    return ((oldDerivative * NEW_DER_FRAC) + deltaVal) / (NEW_DER_FRAC + 1);
}

const updateAll = (setWorldState) => {
    setWorldState(oldState => {
        const oldGlobal = oldState.company.globalValue;
        const oldMine = oldState.company.mine;
        const mineOffset = calcOffset(oldMine.derivative, oldGlobal);
        
        const oldFarm = oldState.company.farm;
        const farmOffset = calcOffset(oldFarm.derivative, oldGlobal);

        const oldWood = oldState.company.wood;
        const woodOffset = calcOffset(oldWood.derivative, oldGlobal);

        const oldMagic = oldState.company.magic;
        const magicOffset = calcOffset(oldMagic.derivative, oldGlobal);

        const oldCrafting = oldState.company.crafting;
        const craftingOffset = calcOffset(oldCrafting.derivative, oldGlobal);

        const newGlobalValue = (
            oldMine.value
            + oldFarm.value
            + oldWood.value
            + oldMagic.value
            + oldCrafting.value
        );

        console.log("Mine value: ", oldMine.value);
        console.log("Global value: ", newGlobalValue);

        return ({
            ...oldState,
            company: {
                ...oldState.company,
                mine: {
                    value: oldMine.value + mineOffset,
                    derivative: calcDerivative(oldMine.derivative, mineOffset)
                },
                farm: {
                    value: oldFarm.value + farmOffset,
                    derivative: calcDerivative(oldFarm.derivative, farmOffset)
                },
                wood: {
                    value: oldWood.value + woodOffset,
                    derivative: calcDerivative(oldWood.derivative, woodOffset)
                },
                magic: {
                    value: oldMagic.value + magicOffset,
                    derivative: calcDerivative(oldMagic.derivative, magicOffset)
                },
                crafting: {
                    value: oldCrafting.value + craftingOffset,
                    derivative: calcDerivative(oldCrafting.derivative, craftingOffset)
                },
                globalValue: newGlobalValue
            }
        })
    });
}

export const UpdateEconomy = (setWorldSate) => {
    updateAll(setWorldSate);
}