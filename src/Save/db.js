import { getInitialPlayerState, getInitialUtilState, getInitialWorldState } from "../State/InitialStates";

const PLAYER_ADDRESS = "PlayerStorage";
const WORLD_ADDRESS = "WorldStorage";
const UTIL_ADDRESS = "UtilStorage";

export const OpenStorage = (setPlayerState, setWorldState, setUtilState) => {
    let playerStorage = localStorage.getItem(PLAYER_ADDRESS);
    let worldStorage = localStorage.getItem(WORLD_ADDRESS);
    let UtilStorage = localStorage.getItem(UTIL_ADDRESS);

    if ((playerStorage === null) || (worldStorage === null) || (UtilStorage === null)) {
        localStorage.setItem(PLAYER_ADDRESS, JSON.stringify(getInitialPlayerState()));
        localStorage.setItem(WORLD_ADDRESS, JSON.stringify(getInitialWorldState()));
        localStorage.setItem(UTIL_ADDRESS, JSON.stringify(getInitialUtilState()));

        playerStorage = localStorage.getItem(PLAYER_ADDRESS);
        worldStorage = localStorage.getItem(WORLD_ADDRESS);
        UtilStorage = localStorage.getItem(UTIL_ADDRESS);
    }

    setPlayerState(JSON.parse(playerStorage));
    setWorldState(JSON.parse(worldStorage));
    setUtilState(JSON.parse(UtilStorage));
}

export const DeleteStorage = () => {
    localStorage.clear();
}

export const SaveToStorage = (playerState, worldState, utilState, setUtilState) => {
    setUtilState(oldState => {
        return {
        ...oldState,
        isNewSave: false
    }});

    localStorage.setItem(PLAYER_ADDRESS, JSON.stringify(playerState));
    localStorage.setItem(WORLD_ADDRESS, JSON.stringify(worldState));
    localStorage.setItem(UTIL_ADDRESS, JSON.stringify(utilState));
}