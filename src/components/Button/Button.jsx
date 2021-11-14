import styled from "styled-components";
import { currentTheme } from "../../constants/theme";

const StyledButton = styled.button`
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
export const Button = ({ variant, ...props }) => {
  if (variant === "secondary") {
    return secondary(props);
  }

  if (variant === "third") {
    return third(props);
  }

  return primary(props);
};
