import {Howl, Howler} from 'howler';

const DIR = "AudioFiles/FX/";
const FX_VOLUME = 0.5;

// Audio Files

const audioAcceptOffer_1 = new Howl({
    src: [DIR + "Accept_Offer_1.mp3"],
    volume: FX_VOLUME * 1.0
});

const audioViewSelector_1 = new Howl({
    src: [DIR + "View_Selector_1.mp3"],
    volume: FX_VOLUME * 0.8
});

const audioLevelUp_1 = new Howl({
    src: [DIR + "Epic_Level_Up_1.mp3"],
    volume: FX_VOLUME * 0.4
});

// Functions

export const SoundUpgrade = () => {
    audioAcceptOffer_1.play();
}

export const SoundAcceptOffer = () => {
    audioAcceptOffer_1.play();
}

export const SoundSwitchView = () => {
    audioViewSelector_1.play();
}

export const SoundChangeDay = () => {
    audioViewSelector_1.play();
}

export const SoundLevelUp = () => {
    audioLevelUp_1.stop();
    audioLevelUp_1.play();
}