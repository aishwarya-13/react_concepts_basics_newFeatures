import React,{useState} from "react";

const UpdatedComponent = (OriginalComponent)=>{

    function NewComponent(props){

        const [money, setMoney] = useState(10);
        const {increaseBy} = props;

        const handleIncrease = ()=>{
            setMoney(money * increaseBy);
        }
        
        return(
            <OriginalComponent
                {...props}//Pass down all OriginalComponent's props to it
                handleIncrease={handleIncrease}//pass down function handler
                money={money}//pass down state variable
            />
        )
    }
    return NewComponent;
};

export default UpdatedComponent;

/**
 * Here in this UpdatedComponent we extract the common functionality from Person1 and Person2 
 * (maintaining a state variable and incresing the count) and put it in UpdatedComponent.
 * The UpdatedComponent wraps the Person1 and Person2 component and supplies it with the state variable and handleIncrease function
 */
