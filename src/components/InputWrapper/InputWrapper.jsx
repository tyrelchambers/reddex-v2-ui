import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.text};
`;

const InputWrapper = ({ label, htmlFor, children }) => {
  return (
    <div className="flex flex-col">
      <StyledLabel className="font-semibold  mb-2 " htmlFor={htmlFor}>
        {label}
      </StyledLabel>
      {children}
    </div>
  );
};

export default InputWrapper;
