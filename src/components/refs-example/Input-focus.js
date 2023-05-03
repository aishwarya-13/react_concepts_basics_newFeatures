import React,{useEffect, useRef} from "react";

function InputFocus(){
    const inputRef = useRef(null);

    //Focus on click of button
    function handleClick(){
        inputRef.current.focus();
    }

    //Focus when component renders on the UI
    useEffect(()=>{
        inputRef.current.focus();
    });

    return(
        <div>
            <input ref={inputRef}/>
            <button onClick={handleClick}>Click Me to focus</button>
        </div>
    )
};

export default InputFocus;
