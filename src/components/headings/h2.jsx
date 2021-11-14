import React from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
  color: ${({ theme }) => theme.text};
`;

export const H2 = ({ children, className = "", ...props }) => (
  <StyledH2 className={`font-bold text-xl  ${className}`} {...props}>
    {children}
  </StyledH2>
);
