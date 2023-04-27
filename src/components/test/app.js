
import Palindrome from "./palindrome.js";
import React, { useState } from "react";

export default function App2() {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    let val = event.target.value;
    setInput(val);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input type="text" onChange={handleChange} />
      <Palindrome word={input} />
    </div>
  );
}
