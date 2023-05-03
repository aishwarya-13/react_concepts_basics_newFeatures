import React,{useState} from "react";
import withCounter from './withCounter';

function ClickIncrease (props){
    const [fontSize, setFontSize] = useState(10);
    const {counter, incrementCounter, name} = props;//these props are given by HOC
    return(
        <div>
            <button onClick={()=>{
                setFontSize((size)=>{
                    return size + 1;
                })
            }}>
                {`Increase with click`}
            </button>
            <p style={{fontSize}}>Size of font in onClick function:{fontSize}</p>
            {/*Now render the value of the 'name' prop passed by HOC*/ }
            <p>Value of 'name' in ClickIncrease: {name}</p>
            {/*Use the incrementCounter method to increment the 'counter' state..*/}
            <button onClick={incrementCounter}>Increase Counter in CLickIncrease</button>
            {/*Render the value of our 'counter' variable:*/}
            <p>Value of 'counter' in HoverIncrease/ClickIncrease: {counter}</p>
        </div>
    )
}

//We have now converted HoverIncrease to an HOC function.
export default withCounter(ClickIncrease, 10);