import React from "react";
import UpdatedComponent from './hoc';

const Person1 = (props)=>{
    
    const {money, handleIncrease, company} = props;

    return(
        <div>
            <h3>{`Aish is offering $${money} because she works in ${company}`}</h3>
            <button onClick={handleIncrease}>Increase Money</button>
        </div>
    )
};

export default UpdatedComponent(Person1);
