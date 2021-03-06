import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  background-color: ${(props) => props.theme.input};
  color: ${(props) => props.theme.text};
`;

const StyledInputWrapper = styled.div`
  background-color: ${({ theme }) => theme.input};
  .input-icon {
    svg {
      color: ${({ theme }) => theme.text};
    }
    p {
      color: ${({ theme }) => theme.textLight};
    }
  }
`;

const Input = React.forwardRef(
  ({ type = "text", className = "", icon, customIcon, ...props }, ref) => (
    <StyledInputWrapper className="flex items-center w-full h-12 rounded-md overflow-hidden ">
      {icon && (
        <div className="h-full input-icon mr-2 ml-2 flex items-center justify-center px-2">
          <FontAwesomeIcon icon={icon} />
        </div>
      )}
      {customIcon && (
        <div className="h-full input-icon mr-2 ml-2 flex items-center justify-center px-2">
          {customIcon}
        </div>
      )}

      <StyledInput
        ref={ref}
        type={type}
        className={`bg-gray-100  h-full  w-full px-2 ${className}`}
        {...props}
      />
    </StyledInputWrapper>
  )
);

export default Input;
