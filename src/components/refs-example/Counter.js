import React,{useRef} from "react";

function Counter(){
    let ref = useRef(0);

    function handleCLick(){
        ref.current = ref.current + 1;
        alert(`You clicked ${ref.current} times`);
    }

    return(
        <div>
            <button onClick={handleCLick}>Click Me</button>
        </div>
    )
}

export default Counter;

/**
 * If you show {ref.current} in the JSX, the number won’t update on click. 
 * This is because setting ref.current does not trigger a re-render. 
 * Information that’s used for rendering should be state instead.
 */