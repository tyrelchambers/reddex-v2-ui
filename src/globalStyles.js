import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.backgroundMain};
  }

  hr {
    border-color: ${({ theme }) => theme.border};
  }
`;
