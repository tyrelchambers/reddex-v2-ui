import styled from "styled-components";

const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.text};
`;

export const H1 = ({
  children,
  className = "",
  textSize = "text-3xl ",
  ...props
}) => (
  <StyledH1 className={`font-bold ${textSize}  ${className}`} {...props}>
    {children}
  </StyledH1>
);
