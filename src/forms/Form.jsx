import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  .from {
    color: ${({ theme }) => theme.textLight};
  }

  .module {
    background-color: ${(props) => props.theme.backgroundSecondary};
  }

  .headline {
    color: ${({ theme }) => theme.text};
  }

  .subtitle {
    color: ${({ theme }) => theme.textLight};
  }
`;

const Form = ({ className = "", children }) => {
  return (
    <StyledForm className={`flex flex-col gap-6 ${className}`}>
      {children}
    </StyledForm>
  );
};

export default Form;
