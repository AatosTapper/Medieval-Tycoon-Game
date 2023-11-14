const CalcWeek = (days) => Math.floor(days / 7);

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
        case 7:
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

const NewDay = (setWorldState) => {
    IncrementDay(setWorldState);
}

export default NewDay;