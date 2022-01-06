import { faSpinnerThird } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { currentTheme } from "../../constants/theme";

const StyledButton = styled.button`
  white-space: nowrap;
`;

const StyledButtonMain = styled(StyledButton)`
  background-color: ${(props) =>
    props.disabled
      ? props.theme.backgroundSecondary
      : props.theme.accentPrimary};

  color: ${(props) => (props.disabled ? props.theme.textSecondary : "white")};

  transition: all 0.2s ease-in-out;
  &:not(:disabled):hover {
    filter: brightness(90%);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const StyledButtonSecond = styled(StyledButton)`
  border: 2px solid
    ${(props) => (props.isSelected ? props.theme.accentPrimary : "transparent")};
  color: ${(props) =>
    props.isSelected ? props.theme.accentPrimary : props.theme.text};
  background-color: ${(props) => props.theme.backgroundSecondary};
  transition: all 0.2s ease-in-out;
  &:hover {
    filter: brightness(90%);
  }
`;

const StyledOutlinePrimary = styled(StyledButtonMain)`
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.accentPrimary};
  color: ${(props) => props.theme.accentPrimary};
  transition: all 0.2s ease;
  &:hover {
    background-color: ${(props) => props.theme.accentPrimary};
    color: white;
  }
`;

StyledButton.defaultProps = {
  theme: currentTheme,
};

const primary = (props) => (
  <StyledButtonMain
    type={props.type || "button"}
    className={`   h-12 px-4 rounded-md  ${
      props.className ? props.className : ""
    }`}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.loading ? (
      <FontAwesomeIcon icon={faSpinnerThird} className="fa-spin" />
    ) : (
      props.children
    )}
  </StyledButtonMain>
);

const secondary = (props) => (
  <StyledButtonSecond
    type={props.type || "button"}
    className={`bg-gray-200 text-gray-700  h-12 px-4 rounded-md  ${
      props.className ? props.className : ""
    }`}
    onClick={props.onClick}
    isSelected={props.isSelected}
  >
    {props.children}
  </StyledButtonSecond>
);

const third = (props) => (
  <StyledButton
    type={props.type || "button"}
    className={` text-accent-primary underline flex items-center  ${
      props.className ? props.className : ""
    }`}
    onClick={props.onClick}
  >
    {props.children}
  </StyledButton>
);

const danger = (props) => (
  <StyledButton
    type={props.type || "button"}
    className={`border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all  h-12 px-4 rounded-md  ${
      props.className ? props.className : ""
    }`}
    onClick={props.onClick}
  >
    {props.children}
  </StyledButton>
);

const outlinePrimary = (props) => (
  <StyledOutlinePrimary
    type={props.type || "button"}
    className={` text-white  h-12 px-4 rounded-md  ${
      props.className ? props.className : ""
    }`}
    onClick={props.onClick}
  >
    {props.children}
  </StyledOutlinePrimary>
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

  if (variant === "outline-primary") {
    return outlinePrimary(props);
  }
  return primary(props);
};
