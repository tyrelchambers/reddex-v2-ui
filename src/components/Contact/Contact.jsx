import {
  faCircleUser,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.backgroundSecondary};

  .body {
    color: ${(props) => props.theme.textLight};
  }
`;

const Contact = ({ username, body }) => {
  return (
    <StyledDiv className="rounded-lg overflow-hidden">
      <div className="bg-accent-primary p-3">
        <p className="text-white font-bold">
          <FontAwesomeIcon icon={faCircleUser} className="mr-2" />
          {username}
        </p>
      </div>
      <p className="body p-3">{body}</p>
      <hr />
      <div className="flex items-center gap-6 p-3 w-full justify-end">
        <FontAwesomeIcon icon={faPenToSquare} className="edit-action" />
        <FontAwesomeIcon icon={faTrashCan} className="text-accent-primary" />
      </div>
    </StyledDiv>
  );
};

export default Contact;
