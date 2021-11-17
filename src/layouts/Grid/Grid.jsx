import React from "react";
import styled from "styled-components";

const StyledGrid = styled.section`
  grid-auto-rows: 350px;
`;

const Grid = (props) => {
  return (
    <StyledGrid className="grid grid-cols-3 flex-1 gap-6  mt-8">
      {props.children}
    </StyledGrid>
  );
};

export default Grid;
