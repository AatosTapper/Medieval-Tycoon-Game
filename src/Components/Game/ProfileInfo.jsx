import React from "react";
import "../../CSS/index.css";
import "../../CSS/ProfileInfo.css";
import { usePlayerContext } from "../../State/PlayerContextProvider";

const InfoStyle = {  
    backgroundImage: "url('src/images/InfoUI.png')",

    backgroundSize: "cover", 
    backgroundRepeat: "no-repeat", 
    marginLeft : "0px",
    imageRendering: "pixelated",    
    backgroundSize : "contain",
    padding : "20px",
    marginBottom : "20px",
};

const globalText = {  
    marginLeft : "20px",
    lineHeight: 1, // Ajustez cette valeur pour l'espacement vertical du texte
    marginBottom: '10px',
    
};

export default function ProfileInfo() {
    const { playerState, setPlayerState } = usePlayerContext();

    return (
        <div style={InfoStyle}>
            <div style={globalText}>
            <h1 id="Profile-Info-Name">{playerState.name}</h1>
            <h1 id="Profile-Info-Level">Level {playerState.level}</h1>
            <h1 id="Profile-Info-XP">Experience {playerState.xp}</h1>
            <h1 id="Profile-Info-Money">Money {Math.round(playerState.money * 100) / 100}€</h1>
            </div>
        </div>
    );
}