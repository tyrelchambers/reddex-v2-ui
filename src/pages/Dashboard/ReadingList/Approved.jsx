import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
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
import { Button } from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import {
  faArrowDownFromDottedLine,
  faArrowUpFromDottedLine,
} from "@fortawesome/pro-duotone-svg-icons";
import ImportStory from "../../../components/ImportStory/ImportStory";
import { observer } from "mobx-react-lite";
import { useUser } from "../../../hooks/useUser";

const StyledWrapper = styled.section`
  .active-filter {
    color: ${(props) => props.theme.text};
  }
`;

const Approved = observer(({ ModalStore }) => {
  const { approvedList, transferToCompleted } = useReadingList();
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState([]);
  const { query } = useUser();

  const user = query.data;

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

  const handleImport = () => {
    ModalStore.openModal();
    ModalStore.setModalContent(<ImportStory ModalStore={ModalStore} />);
  };

  const inputHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <StyledWrapper className="w-full">
      <header className="flex flex-col sm:flex-row justify-between w-full gap-6">
        <div className="flex items-center gap-4 max-w-xl w-full">
          <Input
            placeholder="Search by keywords..."
            icon={faSearch}
            onInput={(e) => inputHandler(e)}
          />
        </div>

        <div className="flex items-center gap-6">
          <Button variant="third" className="gap-4" onClick={handleImport}>
            <FontAwesomeIcon
              icon={faArrowDownFromDottedLine}
              className="text-accent-primary"
            />
            Import
          </Button>
          <Button variant="third" className="gap-4">
            <FontAwesomeIcon
              icon={faArrowUpFromDottedLine}
              className="text-accent-primary"
            />
            Request
          </Button>
        </div>
      </header>
      <div className="flex flex-col sm:flex-row gap-6 justify-between mt-10">
        <H1>Approved</H1>
        <div className="w-full sm:w-60">
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
              .filter((el) =>
                search
                  ? el.title.toLowerCase().includes(search.toLowerCase())
                  : el
              )
              .map((item, index) => (
                <Card
                  data={item}
                  key={index}
                  user={user}
                  transferToCompleted={transferToCompleted}
                  isReadingItem
                />
              ))}
        </Grid>
      )}
    </StyledWrapper>
  );
});

export default Approved;
