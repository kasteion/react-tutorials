import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      //console.log("Cleanup Function");
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleResize = () => {
    setSize(window.innerWidth);
  };

  return (
    <>
      <h1>Window</h1>
      <h2>{size} px</h2>
    </>
  );
};

export default UseEffectCleanup;
