import { SoundLevelUp } from "../Audio/playSound";
import { AddNotification } from "./NewNotification";
import { AddSkillPoint, AddXp } from "./Transaction";

// TODO: find a good polynomial
const calcXpToLevelUp = (level) => {
    return Math.round(
        - 0.01 * (level - 1) ** 3
        + 4 * (level - 1) ** 2
        + 100 * (level - 1)
        + 500);
}

const LevelUp = (setPlayerState, setWorldState, level) => {
    SoundLevelUp();
    AddNotification(setWorldState, `Level up to ${level}`);
    AddSkillPoint(setPlayerState, 1);
}

// This is a special case where a logic file holds state, but it's
// only for avoiding the polynomial calculation at each xp check.
let xpToLevelUp = null;

export default function UpdateXpAndLevel(worldState, setWorldState, playerState, setPlayerState) {
    let levelledUp = false;
    let xp = playerState.xp;
    let level = playerState.level;

    if (xpToLevelUp === null) {
        calcXpToLevelUp(level);
    }

    while (xp >= xpToLevelUp) {
        xp -= xpToLevelUp;
        level++;
        levelledUp = true;
        LevelUp(setPlayerState, setWorldState, level);
        xpToLevelUp = calcXpToLevelUp(level);
    }

    if (levelledUp) {
        const newXp = xp;
        const newLevel = level;

        setPlayerState(oldState => ({
            ...oldState,
            xp: newXp,
            level: newLevel
        }));
    }
}