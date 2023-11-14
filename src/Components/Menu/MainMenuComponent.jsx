import React from "react";
import { useNavigate } from 'react-router-dom';
import "../../CSS/MainMenu.css";

export default function MainMenuComponent() {
    const navigate = useNavigate();

    const goToGame = () => {
        navigate("/game");
    }

    return (
        <>
        <h1 className="Menu-Title">Main menu</h1>
        <button onClick={goToGame}>Start Game</button>
        </>
    );
}