import React from "react";
import "../../CSS/Newspaper.css";
import { useWorldContext } from "../../State/WorldContextProvider";

const newspaperStyle = {
    border: "2px solid black", // Bordures noires
  backgroundColor: "#f5e6cc", // Couleur parchemin
  padding: "10px",
  borderRadius: "10px", // Coins arrondis
  display: "inline-block",
  width: "300px",
  };
  const titleFontStyle = {
    fontSize: "16px",
    fontWeight: "bold",
  };

export const Newspaper = () => {
    
    return (
        <>
            <p style={newspaperStyle} className="animated bounceInLeft">
  <StaticMessage />
  
</p>
        </>
    );
}

const StaticMessage = () => {
    const { worldState, setWorldState } = useWorldContext();
    return (
        <div>
            <h1> Local Gazette : daily news  </h1>
            <h1 style={titleFontStyle}>    {worldState.newspaper.title}  </h1>
             <p> {worldState.newspaper.text}  </p>
        </div>
    );
}

