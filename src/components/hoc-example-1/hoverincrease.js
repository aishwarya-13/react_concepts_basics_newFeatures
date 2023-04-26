import React,{useState} from "react";
import withCounter from './withCounter';

function HoverIncrease (props){
    const [fontSize, setFontSize] = useState(10);
    const {counter, incrementCounter, name, secretWord} = props;//these props are give by HOC. Also the custom prop 'secretWord' is passed down by HOC
    return(
        <div>
            <div>{`Custom prop is ${secretWord}` }</div>
            <button onMouseOver={()=>{
                setFontSize((size)=>{
                    return size + 1;
                })
            }}>
                {`Increase with click`}
            </button>
            <p style={{fontSize}}>
                Size of font in onMouseOver function: {fontSize}
            </p>
            <p style={{fontSize}}>Size of font in onClick function:{fontSize}</p>
            {/*Now render the value of the 'name' prop passed by HOC*/ }
            <p>Value of 'name' in ClickIncrease: {name}</p>
            {/*Use the incrementCounter method to increment the 'counter' state..*/}
            <button onClick={incrementCounter}>Increase Counter in HoverIncrease</button>
            {/*Render the value of our 'counter' variable:*/}
            <p>Value of 'counter' in HoverIncrease/ClickIncrease: {counter}</p>
        </div>
    )
}

export default withCounter(HoverIncrease, 20);