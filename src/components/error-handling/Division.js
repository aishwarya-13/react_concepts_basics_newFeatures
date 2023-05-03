import React, { useState } from "react";

export default function Division(){
    const [denominator, setDenominator] = useState(1);
    const [numerator, setNumerator] = useState(1);
    const [result, setResult] = useState(0);
    const [isError, setIsError] = useState(false);

    function handleNumeratorChange(e){
        setNumerator(e.target.value);
    }

    function handleDenominatorChange(e){
        setDenominator(e.target.value);
    }

    function getDivision(){
        try{
            if(parseInt(denominator) === 0){
                throw new Error('Denominator cannot be zero');
            }
            setResult(numerator / denominator);
        }catch{
            setIsError(true);
        }
    }

    return(
        <>
            {
                isError ?
                    <ErrorBoundary>
                        
                    </ErrorBoundary>
                :
                <div>
                    <label>Enter numerator</label>
                    <input type={'number'} id={'numerator'} onChange={handleNumeratorChange}/>
                    <label>Enter denominator</label>
                    <input type={'number'} id={'numerator'} onChange={handleDenominatorChange}/>
                    <button onClick={getDivision}>Divide</button>
                    <div>Result of division is {result}</div>
                </div>
        }
        </>
    )
}

const ErrorBoundary = ()=>{
    return(
        <div>
            {`Division error`}
        </div>
    )
}