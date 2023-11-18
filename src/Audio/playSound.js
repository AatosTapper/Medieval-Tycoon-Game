import {Howl, Howler} from 'howler';

const DIR = "AudioFiles/FX/";
const FX_VOLUME = 0.5;

// Audio Files

const audioUpgrade_1 = new Howl({
    src: [DIR + "upgrade_1.mp3"],
    volume: FX_VOLUME * 1.0
});

const audioViewSelector_1 = new Howl({
    src: [DIR + "viewSelector_1.mp3"],
    volume: FX_VOLUME * 0.9
})

// Functions

export const SoundUpgrade = () => {
    audioUpgrade_1.play();
}

export const SoundAcceptOffer = () => {
    audioUpgrade_1.play();
}

export const SoundSwitchView = () => {
    audioViewSelector_1.play();
}

export const SoundChangeDay = () => {
    audioViewSelector_1.play();
}