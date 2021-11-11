import React from "react";
import Header from "../Header/Header";

const Wrapper = ({ children }) => {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
};

export default Wrapper;
