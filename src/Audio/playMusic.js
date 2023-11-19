import {Howl, Howler} from 'howler';

const DIR = "AudioFiles/Music/";
const MUSIC_VOLUME = 0.1;

const audioMainMusic = new Howl({
    src: [DIR + "MedievalTycoonGameMusicV2.wav"],
    volume: MUSIC_VOLUME * 1.0,
    loop: true,
    onload: () => {
        // Ensure the music is loaded before attempting to play
        console.log("Music loaded");
    },
});

export const PlayMusicMain = () => {
    audioMainMusic.stop();
    //audioMainMusic.play();
} 

export const StopMusicMain = () => {
    audioMainMusic.stop();
}