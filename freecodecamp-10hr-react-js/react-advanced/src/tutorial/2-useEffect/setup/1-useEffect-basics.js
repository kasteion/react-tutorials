import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(value);
    if (value > 0) {
      document.title = `New Messages (${value})`;
    } else {
      document.title = "React App";
    }
  });

  return (
    <>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increase Counter
      </button>
    </>
  );
};

export default UseEffectBasics;
