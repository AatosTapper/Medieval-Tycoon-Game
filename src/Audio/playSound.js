import {Howl, Howler} from 'howler';

const DIR = "AudioFiles/FX/";

const FX_VOLUME = 0.5;

export const SoundUpgrade = () => {
    const volume = 1.0;

    const sound = new Howl({
        src: [DIR + "upgrade_1.mp3"],
        volume: FX_VOLUME * volume
    })

    sound.play();
}

export const SoundSwitchView = () => {
    const volume = 1.0;

    const sound = new Howl({
        src: [DIR + "viewSelector_1.mp3"],
        volume: FX_VOLUME * volume
    })

    sound.play();
}