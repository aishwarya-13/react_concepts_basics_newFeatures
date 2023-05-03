import React, { forwardRef, useRef } from "react";

export default function Form(){
    const inputRef = useRef(null);

    function handleClick(){
        inputRef.current.focus();
    }

    return(
        <>
            <MyInput ref={inputRef}/>
            <button onClick={handleClick}>Click me to focus</button>
        </>
    )
}


const MyInput = forwardRef((props, ref)=>{
    return(
        <input 
            {...props}
            ref={ref}
        />
    )
});

