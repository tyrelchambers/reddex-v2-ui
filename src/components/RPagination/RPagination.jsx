import { Pagination } from "@mui/material";
import styled from "styled-components";
import React from "react";

const StyledWrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.backgroundSecondary};
  padding: 0.1px 0.14em;
  margin-top: 2em;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  .MuiPagination-ul li button {
    color: ${(props) => props.theme.text};
  }
  .MuiPagination-ul li div {
    color: ${(props) => props.theme.text};
  }
  .Mui-selected {
    background: ${(props) => props.theme.accentPrimary} !important;
    color: var(--white) !important;
  }
  .MuiPagination-root {
    margin: 1em 0;
  }

  @media screen and (min-width: 426px) {
    .MuiPagination-root {
      position: sticky;
      top: 100px;
      height: fit-content;
    }
  }
  @media screen and (max-width: 425px) {
    .pagination-post-wrapper {
      flex-direction: column;
    }
    .MuiPagination-ul {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  @media screen and (max-width: 320px) {
    .MuiPagination-ul {
      flex-wrap: nowrap !important;
    }
  }
`;

const RPagination = ({ count, shape, size, onChange }) => {
  return (
    <StyledWrapper>
      <Pagination count={count} shape={shape} size={size} onChange={onChange} />
    </StyledWrapper>
  );
};

export default RPagination;
