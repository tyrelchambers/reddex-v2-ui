import { faBookBookmark } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { isInReadingList } from "../../utils/isInReadingList";

const StyledWrapper = styled.div`
  .text {
    color: ${(props) => props.theme.textLight};
  }
`;

const IsInReadingList = ({ message, approvedList }) => {
  const isInApprovedList = isInReadingList(approvedList, message);

  return isInApprovedList ? (
    <StyledWrapper>
      <div className="flex items-center text-sm">
        <FontAwesomeIcon icon={faBookBookmark} className="text mr-2" />
        <p className="text">In reading list</p>
      </div>
    </StyledWrapper>
  ) : null;
};

export default IsInReadingList;
