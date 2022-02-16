import React from "react";
import {
  faCalendar,
  faClock,
  faTrashCan,
  faUserCircle,
} from "@fortawesome/pro-duotone-svg-icons";

import styled from "styled-components";
import { averageReadingTimeWithText } from "../../utils/averageReadingTimeWithText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-location";
import { useSubmittedStory } from "../../hooks/useSubmittedStory";
import { format } from "date-fns";
import { parseISO } from "date-fns/esm";

const StyledStory = styled.div`
  border: 1.5px solid ${(props) => props.theme.border};
  transition: all 0.2s ease;

  .title {
    transition: all 0.2s ease;
  }

  .title:hover {
    color: ${(props) => props.theme.accentPrimary};
  }
`;

const SubmittedStory = ({ item, user }) => {
  const { deleteSubmitted } = useSubmittedStory();

  return (
    <StyledStory className="p-4 rounded-lg">
      <p className="text-light flex items-center ">
        <FontAwesomeIcon
          icon={faUserCircle}
          className="text-accent-primary mr-2"
        />
        {item.author}
      </p>
      <Link to={`/dashboard/story/${item.uuid}`}>
        <p className="font-bold text-2xl mt-4 truncate text title">
          {item.story_title}
        </p>
      </Link>

      <footer className="mt-4 flex justify-between flex-wrap gap-6">
        <div className="flex items-center gap-6">
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

          <p className="text-light text-sm flex items-center">
            <FontAwesomeIcon
              icon={faCalendar}
              className="mr-2 text-accent-primary"
            />
            {format(parseISO(item.createdAt), "MMM do, yyyy")}
          </p>
        </div>
        <FontAwesomeIcon
          icon={faTrashCan}
          className="text-accent-primary cursor-pointer"
          onClick={() => deleteSubmitted.mutate(item.uuid)}
        />
      </footer>
    </StyledStory>
  );
};

export default SubmittedStory;
