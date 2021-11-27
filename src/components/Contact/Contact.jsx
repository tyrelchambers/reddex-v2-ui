import {
  faCircleUser,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { useContacts } from "../../hooks/useContacts";

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.backgroundSecondary};

  .body {
    color: ${(props) => props.theme.textLight};
  }
  .edit-action {
    color: ${(props) => props.theme.green};
  }
`;

const Contact = ({ contact }) => {
  const { contactDelete } = useContacts();

  return (
    <StyledDiv className="rounded-lg overflow-hidden shadow-md">
      <div className="bg-accent-primary p-3">
        <p className="text-white font-bold">
          <FontAwesomeIcon icon={faCircleUser} className="mr-2" />
          {contact.name}
        </p>
      </div>
      <p className="body p-3">{contact.notes}</p>
      <hr />
      <div className="flex items-center gap-6 p-3 w-full justify-end">
        <FontAwesomeIcon icon={faPenToSquare} className="edit-action" />
        <FontAwesomeIcon
          icon={faTrashCan}
          className="text-accent-primary"
          onClick={() => contactDelete.mutate(contact.uuid)}
        />
      </div>
    </StyledDiv>
  );
};

export default Contact;
