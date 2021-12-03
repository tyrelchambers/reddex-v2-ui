import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { H1 } from "../../../components/headings/h1";
import { extractSubreddit } from "../../../utils/extractSubreddit";
import RSelect from "../../../components/RSelect/RSelect";
import Grid from "../../../layouts/Grid/Grid";
import Card from "../../../components/Card/Card";
import { useReadingList } from "../../../hooks/useReadingList";
import Loader from "../../../components/Loader/Loader";

const StyledWrapper = styled.section`
  .active-filter {
    color: ${(props) => props.theme.text};
  }
`;

const Approved = () => {
  const { approvedList } = useReadingList();

  const [filters, setFilters] = useState([]);

  useEffect(() => {
    if (approvedList.data) {
      setFilters(
        extractSubreddit(approvedList.data).map((sub) => ({
          value: sub,
          label: sub,
        }))
      );
    }
  }, [approvedList.data]);

  const [selected, setSelected] = useState("");

  return (
    <StyledWrapper className="w-full">
      <div className="flex justify-between">
        <H1>Approved</H1>
        <div className="w-60">
          <RSelect
            placeholder="Add a filter"
            options={filters}
            onChange={(val) => setSelected(val.value)}
          />
        </div>
      </div>
      {selected && (
        <div className="flex mt-6 items-center active-filter">
          <FontAwesomeIcon
            icon={faXmark}
            className="mr-4"
            onClick={() => setSelected("")}
          />
          <p className="text-accent-primary">{selected}</p>
        </div>
      )}

      {approvedList.isLoading && <Loader size="2x" />}

      {!approvedList.isLoading && (
        <Grid>
          {approvedList.data.length > 0 &&
            approvedList.data
              .filter((el) => {
                if (selected) {
                  return el.subreddit === selected;
                }
                return true;
              })
              .map((item, index) => (
                <Card data={item} key={index} isReadingItem />
              ))}
        </Grid>
      )}
    </StyledWrapper>
  );
};

export default Approved;
