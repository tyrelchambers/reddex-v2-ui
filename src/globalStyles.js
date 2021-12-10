import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.backgroundMain};
  }

  hr {
    border-color: ${({ theme }) => theme.border};
  }

  .text {
    color: ${({ theme }) => theme.text};
  }

  .text-light {
    color: ${({ theme }) => theme.textLight};
  }
`;

export const StyledLink = styled(Link)`
  white-space: nowrap;
  background-color: ${(props) => props.theme.accentPrimary};
  color: white;
  height: 3rem;
  padding: 0 1rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
