import React from "react";
import {UserContext} from './context';
import User  from "./User";

function AppContext(){
    
    let user={
        name:'Aishwarya',
        role:'admin',
        email:'aish@gmail.com'
    }

    return(
        <UserContext.Provider value={user}>
            <div>
                <h1>Context example</h1>
                <User/>
            </div>
        </UserContext.Provider> 
    )
}

export default AppContext;