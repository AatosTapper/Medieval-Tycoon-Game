import {Howl, Howler} from 'howler';

const DIR = "AudioFiles/Music/";
const MUSIC_VOLUME = 0.1;

const audioMainMusic = new Howl({
    src: [DIR + "MedievalTycoonGameMusicV1.mp3"],
    volume: MUSIC_VOLUME * 0.7,
    loop: true,
    html5: true,
    onload: () => {
        // Ensure the music is loaded before attempting to play
        console.log("Music loaded");
    },
});

export const PlayMusicMain = () => {
    audioMainMusic.play();
} 

export const StopMusicMain = () => {
    audioMainMusic.stop();
}