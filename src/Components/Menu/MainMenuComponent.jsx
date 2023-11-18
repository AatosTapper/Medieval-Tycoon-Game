import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../../CSS/MainMenu.css";
import "../../CSS/index.css";
import { PlayMusicMain, StopMusicMain } from "../../Audio/playMusic";

export default function MainMenuComponent() {
    const navigate = useNavigate();

    useEffect(() => {
        StopMusicMain();
    }, []);

    const goToGame = () => {
        navigate("/game");
        PlayMusicMain();
    }

    return (
        <div className="Font-Medieval Main-Menu">
            <h1 className="Main-Menu-Title">Game Title Here</h1>
            <button onClick={goToGame} className="Main-Menu-Button Font-Medieval">Start Game</button>
        </div>
    );
}