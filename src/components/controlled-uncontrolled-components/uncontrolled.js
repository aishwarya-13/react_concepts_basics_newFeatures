import React, { useRef } from "react";

//Using refs
export default function Uncontrolled(){
    const nameRef = useRef('');
    const emailRef = useRef('');

    /**
     * Component is refresing check ehat is happening
     */
    function onSubmit(){
        console.log('Name value: ', nameRef.current.value);
        console.log('Email value: ', emailRef.current.value);
    }
    
    return (
        <form onSubmit={onSubmit}>
          <input type="text" name={'name'} ref={nameRef}  />
          <input type="text" name={'email'} ref={emailRef}  />
          <input type="submit" value="Submit" />
        </form>
    );
}

//Use DOM API's directly without using refs
// export default function Uncontrolled(){
//     function onSubmit() {
//         alert("Name value: " + window.fname.value);
//         alert("Email value: " + window.email.value);
//     }
//       return (
//         <form onSubmit={onSubmit}>
//           <input type="text" id="fname" required />
//           <input type="text" name="email" id="email" required />
//           <input type="submit" value="Submit" />
//         </form>
//       );
// }

/**
 * In above form elements React has no control over so its uncontrolled component
 */

