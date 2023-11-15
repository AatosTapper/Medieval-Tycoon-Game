import React from "react";
import "../../CSS/Newspaper.css";

const newspaperStyle = {
    border: "2px solid black", // Bordures noires
  backgroundColor: "#f5e6cc", // Couleur parchemin
  padding: "10px",
  borderRadius: "10px", // Coins arrondis
  display: "inline-block",
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
    return (
        <div>
            <h1> Today news ... </h1>
        </div>
    );
}