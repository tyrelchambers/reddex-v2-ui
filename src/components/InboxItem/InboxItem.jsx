import {
  faCalendarClock,
  faCircleUser,
  faMessageLines,
} from "@fortawesome/pro-duotone-svg-icons";
import { faArrowRightLong } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { getLastReply } from "../../utils/getLastReply";

const StyledWrapper = styled.section`
  min-height: 170px;
  background-color: ${(props) => props.theme.backgroundSecondary};
  max-width: calc(100vw - 18em);
  .body,
  .subject {
    color: ${(props) => props.theme.textLight};
  }

  .body {
    width: 100%;
  }
`;

const InboxItem = ({ data }) => {
  const { author, body, subject } = data.data;
  return (
    <StyledWrapper className="flex flex-col rounded-md overflow-hidden shadow-md">
      <div className="flex items-center bg-accent-primary p-3 justify-between">
        <p className="text-white font-bold">
          <FontAwesomeIcon icon={faCircleUser} className="mr-2" />
          {author}
        </p>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCalendarClock} className="text-white mr-4" />
          <p className="text-white ">{getLastReply(data.data)}</p>
        </div>
      </div>
      <div className="p-3 flex flex-col gap-4 mt-4">
        <p className="subject truncate font-bold text-lg">
          <FontAwesomeIcon
            icon={faArrowRightLong}
            className="text-accent-primary mr-6"
          />
          {subject}
        </p>
        <p className="body truncate">
          <FontAwesomeIcon
            icon={faMessageLines}
            className="text-accent-primary mr-6"
          />
          {body}
        </p>
      </div>
    </StyledWrapper>
  );
};

export default InboxItem;
