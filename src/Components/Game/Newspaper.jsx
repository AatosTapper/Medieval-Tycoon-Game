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

const titleFontStyle = {
    fontSize: "15px",
    fontWeight: "bold",
    width: "250px",
};

const gazetteFontStyle = {
    marginTop : '50px',
    fontSize: "17px",
    fontWeight: "bold",
    width: "300px",
};

const textFontStyle = {
    fontSize: "12px",
    width: "250px",
};

const globalFontStyle = {
    marginLeft : "50px",
    paddinLeft : "30px",  
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
        <div style={globalFontStyle} className="Font-Pixel">
            <h1 style={gazetteFontStyle}> Local Gazette : daily news  </h1>
            <h1 style={titleFontStyle}>    {worldState.newspaper.title}  </h1>
            <p style={textFontStyle}> {worldState.newspaper.text}  </p>
        </div>
    );
}