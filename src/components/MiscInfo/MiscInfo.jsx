import React from "react";
import { Link } from "react-location";
import styled from "styled-components";

const StyledWrapper = styled.section`
  color: ${(props) => props.theme.textLight};

  a {
    display: flex;
    align-items: center;

    &:hover {
      text-decoration: underline;
    }

    &:not(:last-child):after {
      width: 3px;
      height: 3px;
      border-radius: 50%;
      content: "";
      background: ${(props) => props.theme.textLight};
      display: inline-block;
      margin-left: 10px;
    }
  }
`;

const MiscInfo = () => {
  return (
    <StyledWrapper className="flex gap-2 flex-wrap text-xs mt-6 items-center">
      <Link to="/privacy">Privacy</Link>
      <Link to="/terms-of-service">Terms</Link>
      <Link to="/bug-report">Bug report/feedback</Link>
      <p>Reddex &copy; {new Date(Date.now()).getFullYear()}</p>
    </StyledWrapper>
  );
};

export default MiscInfo;
