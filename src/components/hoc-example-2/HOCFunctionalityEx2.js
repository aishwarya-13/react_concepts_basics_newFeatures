import React from "react";
import Person1 from "./Person1";
import Person2 from "./Person2";


const HOCFunctionalityEx2 = ()=>{
    return(
        <div>
            <h1>Auction</h1>
            <Person1 increaseBy={4} company={'Google'}/>
            <Person2 increaseBy={2}/>
        </div>
    )
};

export default HOCFunctionalityEx2;
