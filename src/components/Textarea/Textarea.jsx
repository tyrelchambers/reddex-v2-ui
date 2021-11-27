import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  background-color: ${(props) => props.theme.input};
  color: ${(props) => props.theme.text};
  resize: vertical;
  min-height: 200px;
`;

const Textarea = ({ className, ...props }) => {
  return (
    <StyledTextarea
      className={`rounded-lg p-3 ${className ? className : ""}`}
      {...props}
    />
  );
};

export default Textarea;
