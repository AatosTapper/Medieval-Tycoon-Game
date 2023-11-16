export default function Transaction(setPlayerState, amount) {
    setPlayerState(oldState => ({
        ...oldState,
        money: oldState.money + amount
    }));
} 