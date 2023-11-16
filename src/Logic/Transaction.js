export default function Transaction(setPlayerState, amount) {
    setPlayerState(oldState => ({
        ...oldState,
        money: oldState.money + amount
    }));
}

export function AddXp(setPlayerState, amount) {
    setPlayerState(oldState => ({
        ...oldState,
        xp: oldState.xp + amount
    }));
}

export function AddSkillPoint(setPlayerState, amount) {
    setPlayerState(oldState => ({
        ...oldState,
        skillPoints: oldState.skillPoints + amount
    }));
}