import React from "react";
import ClickIncrease from "./clickincrease";
import HoverIncrease from "./hoverincrease";

const HOCFunctionality = ()=>{
    return(
        <div>
            <ClickIncrease/>
            <HoverIncrease secretWord={'pineapple'}/>
        </div>
    )
};

export default HOCFunctionality;


/**
 * A higher order component is just a function that takes a component as one of its arguments, 
 * messes with it, and then returns back its changed version.
 * A (HOC) is an advanced technique in React for reusing component logic.
 * They are a pattern that emerges from React’s compositional nature.
 * Using HOC we can share props and state variables.
 * In case of sharing the state variable from HOC, the state variable is not shared between the child components
 */