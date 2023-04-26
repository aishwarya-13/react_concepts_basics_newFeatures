import React from "react";
import UpdatedComponent from './hoc';

const Person2 = (props)=>{
    const {money, handleIncrease} = props;

    return(
        <div>
            <h3>Rohit is offering ${money}</h3>
            <button onClick={handleIncrease}>Increase Money</button>
        </div>
    )
};

export default UpdatedComponent(Person2);
