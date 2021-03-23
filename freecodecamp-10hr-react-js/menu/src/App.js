import React from "react";
import Title from "./components/Title";
import Navigation from "./components/Navigation";
import Menu from "./components/Menu";

import data from "./data";

const App = () => {
  return (
    <>
      <Title></Title>
      <Navigation></Navigation>
      <section>
        <Menu></Menu>
      </section>
    </>
  );
};

export default App;
