import {Howl, Howler} from 'howler';

const DIR = "AudioFiles/Music/";
const VOLUME_MULTIPLIER = 0.13; // For mixing, not exposed to the player
let MUSIC_VOLUME = 1.0;

const audioMainMusic = new Howl({
    src: [DIR + "MedievalTycoonGameMusicV2.wav"],
    volume: MUSIC_VOLUME * VOLUME_MULTIPLIER * 1.0,
    loop: true,
    onload: () => {
        console.log("Music loaded");
    },
});

export const UpdateMusicVolume = (state) => {
    let newVolume = state.musicVolume * state.masterVolume;
    newVolume = newVolume < 0 ? 0 : newVolume;
    newVolume = newVolume > 1 ? 1 : newVolume;
    MUSIC_VOLUME = newVolume * newVolume;

    audioMainMusic.volume(MUSIC_VOLUME * VOLUME_MULTIPLIER * 1.0);
}

export const PlayMusicMain = () => {
    audioMainMusic.stop();
    audioMainMusic.play();
} 

export const StopMusicMain = () => {
    audioMainMusic.stop();
}