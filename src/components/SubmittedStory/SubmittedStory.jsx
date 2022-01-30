import React from "react";
import {
  faClock,
  faTrashCan,
  faUserCircle,
} from "@fortawesome/pro-duotone-svg-icons";

import styled from "styled-components";
import { averageReadingTimeWithText } from "../../utils/averageReadingTimeWithText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-location";
import { useSubmittedStory } from "../../hooks/useSubmittedStory";

const StyledStory = styled.div`
  border: 1.5px solid ${(props) => props.theme.border};
  transition: all 0.2s ease;
  &:hover {
    border: 1.5px solid ${(props) => props.theme.accentPrimary};
  }
`;

const SubmittedStory = ({ item, user }) => {
  const { deleteSubmitted } = useSubmittedStory();

  return (
    <StyledStory className="p-4 rounded-lg">
      <Link to={`/dashboard/story/${item.uuid}`}>
        <p className="text-light flex items-center ">
          <FontAwesomeIcon
            icon={faUserCircle}
            className="text-accent-primary mr-2"
          />
          {item.author}
        </p>

        <p className="font-bold text-2xl mt-4 truncate">{item.story_title}</p>

        <footer className="mt-4 flex justify-between">
          <p className="text-light  text-sm">
            <FontAwesomeIcon
              icon={faClock}
              className="mr-2 text-accent-primary"
            />
            ~
            {averageReadingTimeWithText(
              item.body,
              user?.Profile.words_per_minute
            )}{" "}
            minutes
          </p>
          <FontAwesomeIcon
            icon={faTrashCan}
            className="text-accent-primary"
            onClick={() => deleteSubmitted.mutate(item.uuid)}
          />
        </footer>
      </Link>
    </StyledStory>
  );
};

export default SubmittedStory;
