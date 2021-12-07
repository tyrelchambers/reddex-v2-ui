import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";

const StyledWrapper = styled.section`
  background-color: ${(props) => props.theme.contrast};

  .header {
    color: ${(props) => props.theme.backgroundMain};
  }
`;

const WebsiteSaveBanner = () => {
  return (
    <StyledWrapper className="p-4 rounded-lg flex items-center justify-between shadow-lg ">
      <p className="header font-bold">
        You have unsaved changes to your website
      </p>

      <Button variant="third">Save</Button>
    </StyledWrapper>
  );
};

export default WebsiteSaveBanner;
