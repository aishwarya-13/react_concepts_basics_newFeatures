import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent, incrementSize)=>{
    function NewComponent(props){
        const [counter, setCounter] = useState(10);
        //render Original component and pass on its props
        return <OriginalComponent
                {...props}//Pass down all incoming props to the HOC's children: ex secretWork prop in HoverIncrease comp
                counter={counter}//export counter 
                incrementCounter={()=>{
                    setCounter((counter)=>{
                        return counter + incrementSize;
                    });
                }}
                name={'My Blog Post'}//this prop is shared with CLickIncrease and HoverIncrease components
        />
    }
    return NewComponent;
};

export default UpdatedComponent;

/**
 * This component takes in a component as an argument and modifies it and returns it.
 * Here UpdatedComponent is HOC that is taking in CLickIncrease and HoverIncrease components 
 * and adding in extra props (counter, incrementCounter and name) to these components.
 * In those respective components they are accessed via props
 */