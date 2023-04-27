import React, { useEffect, useState } from "react";

const Palindrome = ({ word }) => {
  const [isPalindrome, setIsPalindrome] = useState(false);

  const checkPalindrome = () => {
    let start = 0,
      end = word.length - 1,
      res = false;
    console.log(start, end);
    while (start <= end) {
      if (word[start] !== word[end]) {
        console.log("false");
        res = false;
        break;
      } else {
        console.log("true");
        res = true;
      }
      start++;
      end--;
    }
    setIsPalindrome(res);
  };


  useEffect(() => {
    console.log('in useeffecy',word);
    if (word && word.length) {
      checkPalindrome();
    }
  }, [word]);

  return (
    <div>
      {isPalindrome ? (
        <div>{`${word} is a palindrome`}</div>
      ) : (
        <div>{`${word} is NOT a palindrome`}</div>
      )}
    </div>
  );
};

export default Palindrome;
