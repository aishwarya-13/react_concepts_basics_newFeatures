import React, { useState } from "react";

export default function Controlled(){
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event)=>{
        setInputValue(event.target.value);
    }

    return(
        <div>
            <label>Input</label>
            <input value={inputValue} onChange={handleChange}/>
        </div>
    )
}

/**
 * Here the input's value is controlled React state. So it is a controlled component.
 */