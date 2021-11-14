import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  background-color: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.text};
`;

const StyledInputWrapper = styled.div`
  .input-icon {
    background-color: ${({ theme }) => theme.contrast};

    p {
      color: ${({ theme }) => theme.backgroundMain};
    }
  }
`;

const Input = ({
  type = "text",
  className = "",
  icon,
  customIcon,
  ...props
}) => (
  <StyledInputWrapper className="flex items-center w-full h-12 rounded-md overflow-hidden">
    {typeof icon === "object" && (
      <div className="w-16 h-full input-icon  flex items-center justify-center">
        <FontAwesomeIcon icon={icon} className="text-white text-xl" />
      </div>
    )}
    {customIcon && (
      <div className="w-16 h-full input-icon  flex items-center justify-center">
        {customIcon}
      </div>
    )}
    <StyledInput
      type={type}
      className={`bg-gray-100 px-4 h-full  w-full ${className}`}
      {...props}
    />
  </StyledInputWrapper>
);

export default Input;
