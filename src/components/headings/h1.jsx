import styled from "styled-components";

const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.text};
`;

export const H1 = ({ children, className = "", ...props }) => (
  <StyledH1 className={`font-bold text-3xl   ${className}`} {...props}>
    {children}
  </StyledH1>
);
