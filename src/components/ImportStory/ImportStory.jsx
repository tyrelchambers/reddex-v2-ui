import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { H2 } from "../headings/h2";
import styled from "styled-components";
import ImportUrlForm from "../../forms/ImportUrlForm";

const StyledWrapper = styled.div`
  .text-header {
    color: ${(props) => props.theme.text};
  }

  .text {
    color: ${(props) => props.theme.textLight};
  }
`;

const ImportStory = ({ ModalStore }) => {
  return (
    <StyledWrapper>
      <header className="flex justify-between w-full p-6">
        <H2>Import Story</H2>

        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => ModalStore.closeModal()}
          />
        </div>
      </header>

      <hr className="mb-6" />

      <div className="p-6 ">
        <ImportUrlForm />
      </div>
    </StyledWrapper>
  );
};

export default ImportStory;
