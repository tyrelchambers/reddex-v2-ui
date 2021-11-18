import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  color: ${(props) => props.theme.textLight};
`;

const Subtitle = (props) => {
  return (
    <StyledP className={props.className ? props.className : ""}>
      {props.children}
    </StyledP>
  );
};

export default Subtitle;
