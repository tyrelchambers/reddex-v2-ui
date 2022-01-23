import React from "react";
import styled from "styled-components";

const StyledGrid = styled.section`
  grid-auto-rows: auto;

  @media screen and (min-width: 425px) {
    grid-auto-rows: 350px;
  }
`;

const Grid = (props) => {
  return (
    <StyledGrid className="grid 3xl:grid-cols-4 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 flex-1 gap-6  mt-8">
      {props.children}
    </StyledGrid>
  );
};

export default Grid;
