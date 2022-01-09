import React from "react";
import Wrapper from "../layouts/Wrapper/Wrapper";
import { html } from "../ToS.md";

const TOS = () => {
  return (
    <Wrapper>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="prose ml-auto mr-auto mt-10"
      ></div>
    </Wrapper>
  );
};

export default TOS;
