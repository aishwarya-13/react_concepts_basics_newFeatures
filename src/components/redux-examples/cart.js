import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {addItem, deleteItem} from '../../actions/cart-action';

const Cart = ()=>{
    const state = useSelector(({numOfItems})=> numOfItems);
    const dispatch = useDispatch();
    console.log('store', state);

    const handleIncrease = ()=>{
        dispatch(addItem());
    }

    const handleDecrease = ()=>{
        dispatch(deleteItem());
    }

    return(
        <div>
            <h2>{`Number of items in cart are ${state}`}</h2>
            <button onClick={handleIncrease}>Add Items</button>
            <button onClick={handleDecrease}>Delete Items</button>
        </div>
    )
}

export default Cart;