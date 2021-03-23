import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState({});

  const getUser = async () => {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setTimeout(() => {
        setUser(data);
        setIsLoading(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setIsError(true);
        setIsLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <h1>Oh no... there was an error loading the data!</h1>
      </>
    );
  }

  return (
    <>
      <h1>{user.login}</h1>
    </>
  );
};

export default MultipleReturns;
