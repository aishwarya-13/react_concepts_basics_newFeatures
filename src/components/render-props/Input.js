import React, { useState } from "react";

const Input = ({renderTextBelow})=>{
    const [input, setInput] = useState('');

    const handleChange = (e)=>{
        setInput(e.target.value);
    }

    return(
        <div>
            <input 
                type='text' 
                value={input} 
                onChange={handleChange} />
            <br/>
            {renderTextBelow(input)}
        </div>
    )
}

export default Input;