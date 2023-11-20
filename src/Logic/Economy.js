import { RandGauss } from "./RandGauss";

// How much the delta value affects the new derivative
// 2 = delta value is half of the next derivative
// 3 = delta value is one third of the next derivative
const NEW_DER_FRAC = 5;

const CHAOS = 0.4; // Random offset range
const INERTIA = 1.1; // How much derivative momentum is conserved
const INERTIA_RANGE = 0.2; // Random range
const MARKET_INFLUENCE = 0.05;
const MARKET_INFLUENCE_RANGE = 0.3;
const DEVIATION = 3.1; // how far from 0 can value go before market reacts
const DEVIATION_RANGE = 0.4;

const calcOffset = (derivative, globalValue) => {
    const randOffset = RandGauss(0, CHAOS);
    const derivativeMult = RandGauss(INERTIA, INERTIA_RANGE);
    const globalMarketOffset = RandGauss(MARKET_INFLUENCE, MARKET_INFLUENCE_RANGE) * globalValue;
    let output = derivative * derivativeMult + randOffset + globalMarketOffset;
    output = DEVIATION * Math.tanh(output / DEVIATION);
    return output;
}

const calcDerivative = (oldDerivative, deltaVal, value) => {
    const randTreshold = RandGauss(DEVIATION, DEVIATION_RANGE);
    let derivative = ((oldDerivative * NEW_DER_FRAC) + deltaVal) / (NEW_DER_FRAC + 1);
    if ((value > randTreshold) || (value < -randTreshold)) {
        if (value < 0) {
            derivative = Math.abs(derivative) * 1.1;
        } else {
            derivative = Math.abs(derivative) * (-1.1);
        }
    }
    return Math.tanh(derivative) * 0.95;
}

const updateAll = (setWorldState) => {
    setWorldState(oldState => {
        const oldGlobal = oldState.company.globalValue;

        const oldMine = oldState.company.mine;
        const mineOffset = calcOffset(oldMine.derivative, oldGlobal);
        const mineValue = oldMine.value + mineOffset;
        
        const oldFarm = oldState.company.farm;
        const farmOffset = calcOffset(oldFarm.derivative, oldGlobal);
        const farmValue = oldFarm.value + farmOffset;

        const oldWood = oldState.company.wood;
        const woodOffset = calcOffset(oldWood.derivative, oldGlobal);
        const woodValue = oldWood.value + woodOffset;

        const oldMagic = oldState.company.magic;
        const magicOffset = calcOffset(oldMagic.derivative, oldGlobal);
        const magicValue = oldMagic.value + magicOffset;

        const oldCrafting = oldState.company.crafting;
        const craftingOffset = calcOffset(oldCrafting.derivative, oldGlobal);
        const craftingValue = oldCrafting.value + craftingOffset;

        const newGlobalValue = (
            (oldMine.value
            + oldFarm.value
            + oldWood.value
            + oldMagic.value
            + oldCrafting.value) / 5
        );

        console.log("Mine value: ", oldMine.value);

        return ({
            ...oldState,
            company: {
                ...oldState.company,
                mine: {
                    value: mineValue,
                    derivative: calcDerivative(oldMine.derivative, mineOffset, mineValue)
                },
                farm: {
                    value: farmValue,
                    derivative: calcDerivative(oldFarm.derivative, farmOffset, farmValue)
                },
                wood: {
                    value: woodValue,
                    derivative: calcDerivative(oldWood.derivative, woodOffset, woodValue)
                },
                magic: {
                    value: magicValue,
                    derivative: calcDerivative(oldMagic.derivative, magicOffset, magicValue)
                },
                crafting: {
                    value: craftingValue,
                    derivative: calcDerivative(oldCrafting.derivative, craftingOffset, craftingValue)
                },
                globalValue: newGlobalValue
            }
        })
    });
}

export const UpdateEconomy = (setWorldSate) => {
    updateAll(setWorldSate);
}