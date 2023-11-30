import React, { useEffect, useState } from "react";
import "../../CSS/Slider.css";

// Manual:
//     onChange     = a callback function that is challed when the slider value changes
//     min, max     = slider's minimum and maximum values
//     startVal     = the value that the slider starts with
//     className    = css class name for custom changes to the slider
//     id           = css/html id for forms and value updating

export const Slider = ({ onChange, min, max, val, className, id }) => {
    return (
        <div className={className}>
            <input 
                type="range" 
                min={min} 
                max={max} 
                value={val} 
                onChange={onChange} 
                className="Slider" 
                id={id} 
            />
        </div>
    );
}