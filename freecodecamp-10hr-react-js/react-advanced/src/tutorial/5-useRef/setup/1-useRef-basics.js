import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  console.log(refContainer);

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" ref={refContainer}></input>
        <button>Submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;
