import {
  faCalendarClock,
  faCircleUser,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { getLastReplyDate } from "../../utils/getLastReplyDate";
import { getLastReply } from "../../utils/getLastReply";
import { Link } from "react-location";

const StyledWrapper = styled.section`
  min-height: 150px;

  .subject {
    color: ${(props) => props.theme.text};
  }

  .body {
    width: 100%;
    color: ${(props) => props.theme.textLight};
  }

  .text {
    color: ${(props) => props.theme.text};
  }

  .username {
    background: ${(props) => props.theme.backgroundSecondary};
  }

  .text-light {
    color: ${(props) => props.theme.textLight};
  }
  border-bottom: 1px solid ${(props) => props.theme.border};

  @media screen and (min-width: 426px) {
    max-width: 100%;
  }
`;

const InboxListItem = ({ data }) => {
  const { subject, id, dest } = data.data;

  return (
    <Link to={`/dashboard/inbox/${id}`}>
      <StyledWrapper className="flex flex-col  overflow-hidden">
        <div className="flex items-center justify-between">
          <p className="text-light p-2 px-4 username rounded-md truncate w-44 sm:w-auto">
            <FontAwesomeIcon
              icon={faCircleUser}
              className="mr-2 text-accent-primary"
            />
            {dest}
          </p>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faCalendarClock}
              className=" mr-4 text-accent-primary"
            />
            <p className="text-light">{getLastReplyDate(data.data)}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <p className="subject truncate font-bold text-2xl">{subject}</p>
          <p className="body truncate italic">{getLastReply(data.data).body}</p>
        </div>
      </StyledWrapper>
    </Link>
  );
};

export default InboxListItem;
