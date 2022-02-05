import { faBullhorn } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-location";
import styled from "styled-components";

const StyledDiv = styled(Link)`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const AnnouncementLink = observer(({ AnnouncementStore }) => {
  return (
    <StyledDiv
      className="mt-6 flex items-center p-4"
      to="/dashboard/announcements"
    >
      <FontAwesomeIcon icon={faBullhorn} className="mr-4 text-light" />
      <span className="flex items-center">
        <p className="text font-bold mr-2">Announcements</p>
        {AnnouncementStore.getUnreadCount() > 0 && (
          <span className="announcement-badge text-xs bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center font-bold">
            {AnnouncementStore.getUnreadCount()}
          </span>
        )}
      </span>
    </StyledDiv>
  );
});

export default AnnouncementLink;
