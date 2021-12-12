import React from "react";
import styled from "styled-components";
import Asterisk from "../Asterisk/Asterisk";

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.text};
`;

const StyledWrapper = styled.div`
  .sub-label {
    color: ${({ theme }) => theme.textLight};
  }
`;

const InputWrapper = ({
  label,
  htmlFor,
  children,
  className,
  subLabel = "",
  required,
}) => {
  return (
    <StyledWrapper className={`flex flex-col ${className ? className : ""}`}>
      <StyledLabel
        className="font-semibold  mb-1 flex items-center"
        htmlFor={htmlFor}
      >
        {required && <Asterisk />}
        {label}
      </StyledLabel>
      {subLabel && <p className="text-sm sub-label mb-2">{subLabel}</p>}
      {children}
    </StyledWrapper>
  );
};

export default InputWrapper;
