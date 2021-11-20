import styled from "styled-components";
import { currentTheme } from "../../constants/theme";

const StyledButton = styled.button`
  white-space: nowrap;
  background-color: ${(props) => props.theme["accent-primary"]};
`;

StyledButton.defaultProps = {
  theme: currentTheme,
};

const primary = (props) => (
  <StyledButton
    type="button"
    className={`bg-accent-primary text-white  h-12 px-4 rounded-md  ${
      props.className ? props.className : ""
    }`}
  >
    {props.children}
  </StyledButton>
);

const secondary = (props) => (
  <button
    type="button"
    className={`bg-gray-200 text-gray-700  h-12 px-4 rounded-md  ${
      props.className ? props.className : ""
    }`}
  >
    {props.children}
  </button>
);

const third = (props) => (
  <button
    type="button"
    className={` text-accent-primary underline flex items-center  ${
      props.className ? props.className : ""
    }`}
  >
    {props.children}
  </button>
);

const danger = (props) => (
  <button
    type="button"
    className={`border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all  h-12 px-4 rounded-md  ${
      props.className ? props.className : ""
    }`}
  >
    {props.children}
  </button>
);

export const Button = ({ variant, ...props }) => {
  if (variant === "secondary") {
    return secondary(props);
  }

  if (variant === "third") {
    return third(props);
  }

  if (variant === "danger") {
    return danger(props);
  }

  return primary(props);
};
