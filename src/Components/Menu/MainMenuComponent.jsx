import React from "react";
import { useNavigate } from 'react-router-dom';

export default function MainMenuComponent() {
    const navigate = useNavigate();

    const goToGame = () => {
        navigate("/game");
    }

    return (
        <>
        <h1>Main menu</h1>
        <button onClick={goToGame}>Start Game</button>
        </>
    );
}