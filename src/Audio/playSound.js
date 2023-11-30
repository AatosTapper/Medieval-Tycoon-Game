import {Howl, Howler} from 'howler';

const DIR = "AudioFiles/FX/";
const VOLUME_MULTIPLIER = 0.7; // For mixing, not exposed to the player
let FX_VOLUME = 1.0;

// Functions

export const UpdateFXVolume = (state) => {
    let newVolume = state.fxVolume * state.masterVolume;
    newVolume = newVolume < 0 ? 0 : newVolume;
    newVolume = newVolume > 1 ? 1 : newVolume;
    FX_VOLUME = newVolume * newVolume; // exponential due to desibels being logaritmic
}

export const SoundUpgrade = () => {
    const sound = new Howl({
        src: [DIR + "Accept_Offer_1.mp3"],
        volume: FX_VOLUME * VOLUME_MULTIPLIER * 1.0
    });
    sound.play();
}

export const SoundAcceptOffer = () => {
    const sound = new Howl({
        src: [DIR + "Accept_Offer_1.mp3"],
        volume: FX_VOLUME * VOLUME_MULTIPLIER * 1.0
    });
    sound.play();
}

export const SoundSwitchView = () => {
    const sound = new Howl({
        src: [DIR + "View_Selector_1.mp3"],
        volume: FX_VOLUME * VOLUME_MULTIPLIER * 0.8
    });
    sound.play();
}

export const SoundChangeDay = () => {
    const sound = new Howl({
        src: [DIR + "View_Selector_1.mp3"],
        volume: FX_VOLUME * VOLUME_MULTIPLIER * 0.8
    });
    sound.play();
}

export const SoundLevelUp = () => {
    const sound = new Howl({
        src: [DIR + "Epic_Level_Up_1.mp3"],
        volume: FX_VOLUME ** 2 * VOLUME_MULTIPLIER * 0.4
    });
    sound.stop();
    sound.play();
}