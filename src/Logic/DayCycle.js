const IncrementDay = (setWorldState) => {
    setWorldState(oldWorld => ({
        ...oldWorld,
        day: oldWorld.day + 1
    }));
}

const NewDay = (setWorldState) => {
    IncrementDay(setWorldState);
    // Other stuff at the start of the day
}

export default NewDay;