import React, { useEffect, useState } from "react";
import "../../CSS/Slider.css";

// Manual:
//     onChange     = a callback function that is challed when the slider value changes
//     min, max     = slider's minimum and maximum values
//     val          = the value of the slider (the handle needs this for example)
//     className    = css class name for custom changes to the slider
//     id           = css/html id for forms and value updating
//     header       = OPTIONAL text for automatic label to the slider

export const Slider = ({ onChange, min, max, val, className, id, header = null }) => {
    const renderLabel = () => {
        if (header === null)
            return <></>;
        return (
            <label className="Slider-Header" htmlFor={id}>{header}</label>
        );
    }

    return (
        <div className={className}>
            {renderLabel()}
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
