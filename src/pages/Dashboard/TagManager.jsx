import {
  faCirclePlus,
  faPenToSquare,
  faTag,
  faTrashCan,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { H1 } from "../../components/headings/h1";
import Subtitle from "../../components/Subtitle/Subtitle";
import NewTagForm from "../../forms/NewTagForm";
import { StyledLink } from "../../globalStyles";
import { useTags } from "../../hooks/useTags";
import Loader from "../../components/Loader/Loader";
import { useTag } from "../../hooks/useTag";
import EditTagForm from "../../forms/EditTagForm";
import { Link, Outlet } from "react-location";

const StyledWrapper = styled.section`
  .tag {
    background-color: ${(props) => props.theme.backgroundSecondary};
    p {
      color: white;
    }

    .text-light {
      color: ${(props) => props.theme.textLight} !important;
    }
  }
  .edit-action {
    color: ${(props) => props.theme.green};
  }
`;

const TagManager = () => {
  return (
    <StyledWrapper>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <H1 className="mb-2">Tag Manager</H1>
          <Subtitle>
            Manage all the tags you've created. You can create and delete tags
            here.
          </Subtitle>
        </div>

        <StyledLink to="/dashboard/tags/new">
          <FontAwesomeIcon icon={faCirclePlus} className="mr-2" /> Create a tag
        </StyledLink>
      </div>

      <Outlet />
    </StyledWrapper>
  );
};

export default TagManager;
