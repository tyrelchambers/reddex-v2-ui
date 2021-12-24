import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Link } from "react-location";

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

  .text-super-light {
    color: ${({ theme }) => theme.textSuperLight};
  }

  .gradient-title {
    background: #fa4166; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #fa4166,
      #f1bbc9
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #fa4166,
      #f1bbc9
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent !important;

    padding-bottom: 5px;
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
