import {
  faCirclePlus,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button/Button";
import { H1 } from "../../components/headings/h1";
import Subtitle from "../../components/Subtitle/Subtitle";

const tags = [
  {
    label: "Tag 1",
  },
  {
    label: "Tag 2",
  },
  {
    label: "Tag 3",
  },
  {
    label: "Tag 4",
  },
];

const StyledWrapper = styled.section`
  .tag {
    background-color: ${(props) => props.theme.backgroundSecondary};
    p {
      color: white;
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

        <Button>
          <FontAwesomeIcon icon={faCirclePlus} className="mr-2" /> Create a tag
        </Button>
      </div>
      <main className="grid grid-cols-6 gap-6 mt-10">
        {tags.length > 0 &&
          tags.map((tag) => (
            <div className="tag flex items-center flex-col rounded-lg overflow-hidden shadow-md">
              <div className="flex bg-accent-primary px-4 py-2 w-full">
                <p className="mr-4">{tag.label}</p>
              </div>
              <div className="flex items-center gap-6 p-3">
                <FontAwesomeIcon icon={faPenToSquare} className="edit-action" />
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="text-accent-primary"
                />
              </div>
            </div>
          ))}
      </main>
    </StyledWrapper>
  );
};

export default TagManager;
