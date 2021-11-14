import React from "react";
import styled from "styled-components";

const StyledH3 = styled.h3`
  color: ${(props) => props.theme.text};
`;

export const H3 = ({ children, className = "", ...props }) => (
  <StyledH3
    className={`font-bold text-md text-primary-black  ${className}`}
    {...props}
  >
    {children}
  </StyledH3>
);
