import React from "react";
import "../../CSS/Newspaper.css";
import { useWorldContext } from "../../State/WorldContextProvider";

const newspaperStyle = {
    paddinRight : "10px",
    display: "inline-block",
    width: "max-content",
    height: "450px",
    backgroundImage: "url('src/images/newspaper.png')",
    
    backgroundSize: "cover",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat", 
    
    imageRendering: "pixelated", 
};

export const Newspaper = () => {
    return (
        <div style={newspaperStyle} className="animated bounceInLeft">
            <StaticMessage />
        </div>
    );
}

const StaticMessage = () => {
    const { worldState, setWorldState } = useWorldContext();
    return (
        <div className="Newspaper-Global-Style Font-Pixel">
            <h1 className="Newspaper-Gazette-Font-Style"> Local Gazette : daily news  </h1>
            <h1 className="Newspaper-Title-Font-Style">    {worldState.newspaper.title}  </h1>
            <p className="Newspaper-Text-Font-Style"> {worldState.newspaper.text}  </p>
        </div>
    );
}