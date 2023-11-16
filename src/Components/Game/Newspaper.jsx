import React from "react";
import "../../CSS/Newspaper.css";
import { useWorldContext } from "../../State/WorldContextProvider";

const newspaperStyle = {
     
  
  
  
   paddinRight : "10px",
  display: "inline-block",
  width: "600px",
  height: "600px",
  backgroundImage: "url('src/images/newspaper.png')",
  
  backgroundSize: "cover", 
  backgroundRepeat: "no-repeat", 
  backgroundPosition: "center bottom", 
  imageRendering: "pixelated", 

   
  
  
 
  
  
  marginLeft : "20px"
  
  };
  const titleFontStyle = {
    fontSize: "13px",
    fontWeight: "bold",
    width: "300px",
  
  };
  const gazetteFontStyle = {
    marginTop : '100px',
    fontSize: "20px",
    fontWeight: "bold",
    width: "300px",
    
  
  };
  const textFontStyle = {
    fontSize: "16px",
    
    width: "300px",
  
  };
  const globalFontStyle = {
    marginLeft : "55px",
    paddinLeft : "30px",

  
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
        <div >
            <p style={globalFontStyle} className="Font-Pixel">
            <h1 style={gazetteFontStyle}> Local Gazette : daily news  </h1>
            <h1 style={titleFontStyle}>    {worldState.newspaper.title}  </h1>
             <p style={textFontStyle}> {worldState.newspaper.text}  </p>
             </p>
        </div>
    );
}

