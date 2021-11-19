import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  background-color: ${(props) => props.theme.input};
  color: ${(props) => props.theme.text};
  resize: vertical;
  min-height: 200px;
`;

const Textarea = (props) => {
  return <StyledTextarea className="rounded-lg p-3" {...props} />;
};

export default Textarea;
