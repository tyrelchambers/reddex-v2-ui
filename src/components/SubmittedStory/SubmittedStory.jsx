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

const StyledStory = styled.div`
  border: 1.5px solid ${(props) => props.theme.border};
`;

const SubmittedStory = ({ item, user }) => {
  const { deleteSubmitted } = useSubmittedStory();

  return (
    <StyledStory className="p-4 rounded-lg" key={index}>
      <p className="text-light flex items-center">
        <FontAwesomeIcon
          icon={faUserCircle}
          className="text-accent-primary mr-2"
        />
        {item.author}
      </p>
      <Link
        className="text-2xl font-bold text mt-4"
        to={`/dashboard/story/${item.uuid}`}
      >
        {item.story_title}
      </Link>

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
    </StyledStory>
  );
};

export default SubmittedStory;
