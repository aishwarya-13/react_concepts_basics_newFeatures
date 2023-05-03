import React,{useContext} from "react";
import { UserContext } from "./context";

//2] Using hook
const User = ()=>{

    const userDetails = useContext(UserContext);

    return(
        <div>
            {`User name: ${userDetails.name}`}
            <br/>
            {`User role: ${userDetails.role}`}
            <br/>
            {`User email: ${userDetails.email}`}
        </div>
    )
}

//1] Using Consumer
// const User = ()=>{
//     return(
//         <UserContext.Consumer>
//             {(value)=>{
//                 return(
//                     <div>
//                         {`User name: ${value.name}`}
//                         <br/>
//                         {`User role: ${value.role}`}
//                         <br/>
//                         {`User email: ${value.email}`}
//                     </div>
//                 )
//             }}
//         </UserContext.Consumer>
//     )
// }

export default User;