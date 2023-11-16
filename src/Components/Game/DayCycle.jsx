import React, { useState, useEffect } from "react";
import { initialPlayerState } from "../../State/InitialStates";

export default function DayCycle() {
    const PassDay = () => {
        
        
        
      
      }
      setPlayerState(oldState => ({
        ...oldState,
        day : oldState.day + 1,
        
          }
          ));
return (

<>

<PassDay />
<button onClick={PassDay}>  Pass a day ... </button>
<p>   {initialPlayerState.day}</p>
</>)

}




